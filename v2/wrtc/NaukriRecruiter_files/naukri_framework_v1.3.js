var naukriFrameWork=function(id, context){
	var me=this;
	if(!id) return false; 																							// id is undefined or blank
	if(id==this && document.all) {id = window.event.srcElement}; 		// if id is this (current Element) and the browser is IE and event is not define.
	if(id != document){
	if(typeof id != 'object')
		if(id.search(/(<).+(>)$/)>=0){
			var d=document.createElement(id.substr(1,id.length-2));
			me.el=new Array(d);
		}
		else{context=(Sizzle(context))[0] || document;
		me.el=Sizzle(id, context);
		}
		
	 else if(id.constructor!=Array) {
		me.el=new Array(id);
	 }
	 else{
		me.el=id;
	 }
		
		return new chainingFunction(me.el);
	}
	else
	return new chainingFunction(id)
}
var $n=naukriFrameWork; 

/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	expando = "sizcache" + (Math.random() + '').replace('.', ''),
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rReturn = /\r\n/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;
	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;

	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];

			parts.push( m[1] );

			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context, seed );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}

				set = posProcess( selector, set, seed );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it will be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}
		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}
	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set, i, len, match, type, left;

	if ( !expr ) {
		return [];
	}

	for ( i = 0, len = Expr.order.length; i < len; i++ ) {
		type = Expr.order[i];

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		type, found, item, filter, left,
		i, pass,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				filter = Expr.filter[ type ];
				left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							pass = not ^ found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;

							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var getText = Sizzle.getText = function( elem ) {
    var i, node,
		nodeType = elem.nodeType,
		ret = "";

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent || innerText for elements
			if ( typeof elem.textContent === 'string' ) {
				return elem.textContent;
			} else if ( typeof elem.innerText === 'string' ) {
				// Replace IE's carriage returns
				return elem.innerText.replace( rReturn, '' );
			} else {
				// Traverse it's children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
	} else {

		// If no nodeType, this is expected to be an array
		for ( i = 0; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			if ( node.nodeType !== 8 ) {
				ret += getText( node );
			}
		}
	}
	return ret;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},

	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},

		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var first, last,
				doneName, parent, cache,
				count, diff,
				type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) ) {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

					/* falls through */
				case "last":
					while ( (node = node.nextSibling) ) {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					first = match[2];
					last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}

					doneName = match[0];
					parent = elem.parentNode;

					if ( parent && (parent[ expando ] !== doneName || !elem.nodeIndex) ) {
						count = 0;

						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent[ expando ] = doneName;
					}

					diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match;
		},

		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Sizzle.attr ?
					Sizzle.attr( elem, name ) :
					Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				!type && Sizzle.attr ?
				result != null :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}
// Expose origPOS
// "global" as in regardless of relation to brackets/parens
Expr.match.globalPOS = origPOS;

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;


		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}

		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );

				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );

					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}

				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );

					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}

						} else {
							return makeArray( [], extra );
						}
					}

					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}

			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );

		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem[ expando ] = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem[ expando ] = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context, seed ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet, seed );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE

window.Sizzle = Sizzle;

})();


$n.brewser=function(){
var userAgent=navigator.userAgent.toLowerCase();
var getBrowser = {
version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
chrome: /chrome/.test( userAgent ),
safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
opera: /opera/.test( userAgent ),
msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};
var name=null;
var version=null;
if(getBrowser.chrome){name='chrome';version=getBrowser.version}
if(getBrowser.safari){name='safari';version=getBrowser.version}
if(getBrowser.opera){name='opera';version=getBrowser.version}
if(getBrowser.msie){name='msie';version=getBrowser.version}
if(getBrowser.mozilla){name='mozilla';version=getBrowser.version}
return ({name:name,version:version})
}//browser
$n.browser = $n.brewser;
//var naukriFrameWork_data=[];


//COM - naming
var chainingFunction = function (el) {
	var me = this;
//	me=el;
	//COM - check for a non-empty array else throw exception
	//COM - non array elements support [0] and length in HTML DOM in some browsers
//	console.log(el.constructor.toString().indexOf('Array'), el.length)
	if(el[0])
	me.length=el.length;
	else
	me.length=0;
	me.empty=function(){
		for(var i=0; i<me.length; i++){
			el[i].innerHTML='';
		}
	}
	me.remove=function(){
		for(var i=0; i<me.length; i++){
			naukriFrameWork(el[i]).parent().currObj().removeChild(el[i])
		}
	}

	me.submit=function(arg){
		for(var i=0; i<me.length; i++){
			if(arg || typeof arg=='function')
				el[0].onsubmit=arg;
			else{
				if(el[0].onsubmit()){
					el[0].submit();
				}
			}
		}
	}
	
	me.click=function(arg){
		for(var i=0; i<me.length; i++){
			if(arg || typeof arg=='function')
				el[i].onclick=arg;
			else{
				if(el[i].onclick()){
					el[i].click();
				}
			}
		}
		return me;
	}
	me.mouseover=function(arg){
		for(var i=0; i<me.length; i++){
			if(arg || typeof arg=='function')
				el[i].onmouseover=arg;
			else{
				if(el[i].onmouseover()){
					el[i].mouseover();
				}
			}
		}
		return me;
	}
	me.mouseout=function(arg){
		for(var i=0; i<me.length; i++){
			if(arg || typeof arg=='function')
				el[0].onmouseout=arg;
			else{
				if(el[0].onmouseout()){
					el[0].mouseout();
				}
			}
		}
		return me;
	}
	
	me.siblings=function(){
	var arr=[];
	for(var i=0; i<me.length; i++){
		var currObj = $n(el[i]),prev =currObj.prev(),next =currObj.next();
			if(next){
				while(next){
					arr.push(next.currObj());
					next = next.next();
				}
			}
			if(prev){
					while(prev){
					arr.push(prev.currObj());
					prev = prev.prev();
				}
			}
		}
		return naukriFrameWork(arr);
	}
	me.show = function () {
		for(var i=0; i<me.length; i++){
			/*added two line for bug*/
			if(me.getStyle(el[i], 'display') == 'none'){
			el[i].style.display='';
			el[i].setAttribute('display', ' ');
			}
			/*added two line for bug*/
			if(me.attr('display') || me.attr('display')=='')
			getStyle=me.attr('display');
			else{
			getStyle=me.getStyle(el[i], 'display');
			me.attr('display', getStyle);
			}
			el[i].style.display = (getStyle=='') ? '' : ((getStyle!='inline') ? 'block' : 'inline');
		}
		return me;
	}
	me.hide=function () {
		for(var i=0; i<me.length; i++){
			if(me.attr('display'))
			getStyle=me.attr('display');
			else{
			getStyle=me.getStyle(el[i], 'display');
			me.attr('display', getStyle);
			}
			
			el[i].style.display='none';
		}
		return me;
	}
	me.text=function(){
		for(var i=0;i<me.length;i++){
			var html=me.eq(i).html();
			var reEx=/(\<(\/?[^\>]+)\>)/gi;
			html=html.replace(reEx,'');
			return html;
		}
		return me;
	}
	me.getStyle = function(obj,styleProp)
	{
		if (obj.currentStyle)
			var y = obj.currentStyle[styleProp];
		else if (window.getComputedStyle)
			var y = document.defaultView.getComputedStyle(obj,null).getPropertyValue(styleProp);
		return y;
	}
	me.currObj=function(o){
		for (var i=0; i<me.length; i++){
			return (o)?el[o]:el[0]
		}
	}
	me.ev=function(o){
    	return (document.all) ? window.event : o;
	}
	me.first=function(){
		if(el[0]){
		var elem=el[0].firstChild;
		return naukriFrameWork((elem && elem.nodeType!=1)?elem.nextSibling:elem);
		}
		return me;
	}
	me.last=function(){
		if(el[0]){
		var elem=el[0].lastChild;
		return naukriFrameWork((elem && elem.nodeType!=1)?elem.previousSibling:elem);
		}
		return me;
	}
	me.toggletext=function(textOne, textTwo){
		for (var i=0; i<me.length; i++){
			el[i].innerHTML == textOne ? el[i].innerHTML = textTwo : el[i].innerHTML = textOne;
		}
		return me;
	}
	me.toggle=function(){
		for (var i=0; i<me.length; i++){
			//el[i].style.display = (me.getStyle(el[i], 'display') != 'none') ? 'none' : me.show();
			if(me.getStyle(el[i], 'display') != 'none'){
				if(!me.attr('display')){
					getStyle=me.getStyle(el[i], 'display');
					me.attr('display', getStyle);
				}
				el[i].style.display='none';
			}
			else{
				me.show();
				/*if(me.getStyle(el[i], 'display') == 'none'){
				el[i].style.display='';
				el[i].setAttribute('display', '');
				}
				if(me.attr('display') || me.attr('display')=='')
				getStyle=me.attr('display');
				else{
				getStyle=me.getStyle(el[i], 'display');
				me.attr('display', getStyle);
				}
				el[i].style.display = (getStyle=='') ? '' : ((getStyle!='inline') ? 'block' : 'inline');*/
			}
		}
		return me;
	}
	me.html=function(text){
		for (var i=0; i<me.length; i++){
			if(typeof text!='undefined')
			el[i].innerHTML = text;
			else
			return el[i].innerHTML;
		}
		return me;
	}
	me.parent=function(){
		for (var i=0; i<me.length; i++){
			return naukriFrameWork(el[i].parentNode);
		}
	}
	me.childrens=function(type){
		var children1=new Array();
		for (var i=0; i<me.length; i++){
				var a=Sizzle(type, el[i]);
				
				if(!a.length)
				a=el[i].getElementsByTagName(type || '*');
				
				for(var x=0; x<a.length; x++){
					children1.push(a[x])	
				}
		}
		return naukriFrameWork(children1)
	}
	me.childs=function(selec){
		for (var i=0; i<me.length; i++){
			if(selec)
			return (naukriFrameWork(el[i].nodeName+' '+selec));
			else{
				var childrens=el[i].getElementsByTagName('*');
				var childEle=[];
				for(var k=0; k<childrens.length; k++){
					if(!childEle[childrens[k].nodeName])
					childEle[childrens[k].nodeName]=naukriFrameWork(childrens[k]);
				}
				return childEle;
			}
		}
	}
	me.changeClass=function(classN){
		for (var i=0; i<me.length; i++){
			el[i].className = classN;
		}
		return me;
	}
	me.reg=function(c){
		return new RegExp('(\\b)'+c+'(\\b)', 'gi');
	}
	me.hasClass=function(){
		if(!arguments[1])
		return el[0].className.match(me.reg(arguments[0]));
		else
		return arguments[0].className.match(me.reg(arguments[1]));
	}
	me.removeClass=function(classO){
		for (var i=0; i<me.length; i++){
			if(me.hasClass(el[i], classO))
				el[i].className=el[i].className.replace(me.reg(classO), ' ')
		}
		return me;
	}
	me.addClass=function(classO){
		for (var i=0; i<me.length; i++){
			el[i].className+=' '+classO;
		}
		return me;
	}
	me.replaceClass=function(classO, classN){
		for (var i=0; i<me.length; i++){
			if(me.hasClass(el[i], classO))
				el[i].className=el[i].className.replace(me.reg(classO), classN)
		}
	}
	me.eq=function(val){
		if(el[val]){
			var a = val === -1 ? el.slice(val) : el.slice( val, val + 1 );
			return naukriFrameWork(a[0])
		}
		return me;
	}
  me.toggleClass=function(classO, classN){
    for (var i=0; i<me.length; i++){
      if(classN){
      if(me.hasClass(el[i], classO)){
        el[i].className=el[i].className.replace(me.reg(classO), classN)
      }
      else if(me.hasClass(el[i], classN)){
        el[i].className=el[i].className.replace(me.reg(classN), classO)
      }
      }
      else{
        if(me.hasClass(el[i], classO)){
          me.removeClass(classO);
        }
        else{
        me.addClass(classO);
        }
      }
    }
    return me;
  }
	me.checkAll=function(){
		for (var i=0; i<me.length; i++){
			if(el[i].type=='checkbox')
				el[i].checked = true;
		}
		return me;
	}

	me.isChecked=function(){
		if(el[0].type=='checkbox' || el[0].type=='radio')				
			return el[0].checked;
	}

	me.uncheckAll=function(){
		for (var i=0; i<me.length; i++){
			if(el[i].type=='checkbox' && el[i].checked == true)
				el[i].checked = false;
		}
		return me;
	}
	me.width=function(){
		for (var i=0; i<me.length; i++){
			return el[0].offsetWidth;
		}
	}
	me.height=function(){
		for (var i=0; i<me.length; i++){
			return el[0].offsetHeight;
		}
	}
	me.position=function(){
		for (var i=0; i<me.length; i++){
			var el1 = el[0];
			var pL = 0, pT = 0;
			while(el1){pT+=el1.offsetTop;pL+=el1.offsetLeft;el1=el1.offsetParent;}
			return {'left':pL,'top':pT};
		}
	}
	me.offLeft=function(){
		for (var i=0; i<me.length; i++){
			return el[0].offsetLeft;
		}
	}
	me.offTop=function(){
		for (var i=0; i<me.length; i++){
			return el[0].offsetTop;
		}
	}
	me.innerwidth=function(){
			var innerW = 0;
			if (document.body && document.body.offsetWidth) {
			 innerW = document.body.offsetWidth;
			}
			if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
			 innerW = document.documentElement.offsetWidth;
			}
			if (window.innerWidth && window.innerHeight) {
			 innerW = window.innerWidth;
			}
			return innerW;
	}
	me.innerheight=function(){
			var innerH = 0;
			if (document.body && document.body.offsetWidth) {
			 innerH = document.body.offsetHeight;
			}
			if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
			 innerH = document.documentElement.offsetHeight;
			}
			if (window.innerWidth && window.innerHeight) {
			 innerH = window.innerHeight;
			}
			return innerH;
	}
	me.css=function(){
		for (var i=0; i<me.length; i++){
			for(x in arguments[0]){
				el[i].style[x]=arguments[0][x];
			}
		}
		return me;
	}
	me.getCss=function(x){
		for (var i=0; i<me.length; i++){
				return el[0].style[x];
		}
	}
	me.clone=function(){
		for(var i=0; i<me.length; i++){
			var state=(typeof arguments[0]=='undefined')?true:arguments[0];
			return el[0].cloneNode(state);
		}
	}
	me.append = function(child){
		for (var i=0; i<me.length; i++){
			if((typeof child).toLowerCase()=='string')
				el[i].innerHTML+=child;
			else
				el[i].appendChild(me.getObj(child));
		}
		return me;
	}
	me.prepend=function(child){
		for(var i=0;i<me.length;i++){
			var newNode = me.getObj(child);
			var firstChild = naukriFrameWork(el[i]).first().currObj();
			el[i].insertBefore(newNode,firstChild);
		}
	  return me
	};
	me.getObj=function(child){
		if((typeof child).toLowerCase()=='string')
			child=document.createTextNode(child);
		else if((child.toString()).toLowerCase()=='[object object]')
			child=child.currObj();
		else if((typeof child).toLowerCase()=='object')
			child=child;
		if(el.length>1)
		return child.cloneNode(true);
		else
		return child;
	}
	me.each=function(callback, args, object) {
		if(!object)
		object=this;
		
		var name, i = 0,
			length = object.length,
			isObj = length === (undefined || typeof object == 'function');
		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( el[ i ], i, el[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}
		return me;
	}
	me.appendTo = function(parent1){
		for (var i=0; i<me.length; i++){
			me.getParentObj(parent1).appendChild(el[i]);
		}
		return me;
	}
	me.getParentObj=function(parent1){
		if((typeof parent1).toLowerCase()=='string')
			parent1=naukriFrameWork(parent1).currObj();
		else if((parent1.toString()).toLowerCase()=='[object object]')
			parent1=parent1.currObj();
		else if((typeof parent1).toLowerCase()=='object')
			parent1=parent1;
		return parent1;
	}
	me.ieFix={'tabindex': "tabIndex",'readonly': "readOnly","for": "htmlFor","class": "className",'maxlength': "maxLength",'cellspacing': "cellSpacing",	'cellpadding': "cellPadding",'rowspan': "rowSpan",'colspan': "colSpan", 'usemap': "useMap", 'frameborder': "frameBorder", 'contenteditable': "contentEditable"};

	me.attr=function(){
		if(arguments.length==0) return me;//check for arguments
		for (var i=0; i<el.length; i++){
				// now check waht user expect			
				if(typeof arguments[0]=='string'){
					for(var y=me.ieFix.length-1; y>=0; y--){
						arguments[0]=(arguments[0]==me.ieFix(y)) ? me.ieFix(y) : arguments[0];
					}
					if(arguments.length==1){
						(el[i].getAttribute(arguments[0])!=null)?(el[i].getAttribute(arguments[0])):(el[i].setAttribute(arguments[0],''))
						 return (arguments[0].toLowerCase()=='value')?eval('el[i].'+arguments[0]):el[i].getAttribute(arguments[0]);
					}
					else if(arguments.length==2){
							return (arguments[0].toLowerCase()=='value')?eval('el[i].'+arguments[0]+'="'+arguments[1]+'"'):el[i].setAttribute(arguments[0],arguments[1])
					}
				}//if blog end here
				else if(arguments[0].constructor==Object){
					var att=[],val=[];

					for(var x in arguments[0]){
						att.push(x);
						val.push(arguments[0][x])
					}
					for(var k=0;k<att.length;k++){
						for(var y=me.ieFix.length-1; y>=0; y--){
							att[k]=(att[k]==me.ieFix(y)) ? me.ieFix(y) : att[k];
						}
						el[i].setAttribute(att[k],val[k])
					}
				}//else if block end here
			}
		return me;
	}

	me.setFocus = function(){
		if(el[0])
			el[0].focus();
	}
	me.val=function(){
		if(typeof arguments[0]!='undefined'){
			for(var i=0; i<el.length; i++){
				el[i].value=arguments[0];
			}
		}
		else if(el[0]){
		return el[0].value;
		}
		return me;
	}
	me.parents=function(){              //for multiple parents
		var pr=new Array();
		for (var i=0; i<me.length; i++){
			pr.push(el[i].parentNode);
		}
		return naukriFrameWork(pr);
  }

	me.addEvent=function(eventName, fn){
		for (var i=0; i<me.length; i++){
			window.attachEvent ? el[i].attachEvent('on'+eventName, fn) : el[i].addEventListener(eventName, fn, false);
		}
		return me;
	}
	me.removeEvent=function(eventName, fn){
		for (var i=0; i<me.length; i++){
			if(fn){
				window.detachEvent ? el[i].detachEvent('on'+eventName, fn) : el[i].removeEventListener(eventName, fn, false);
			}
		}
		return me;
	}
	
	me.prev = function () {
		if(el[0]){
		var elem=el[0].previousSibling;
		while(elem && elem.nodeType!=1){
        	elem = elem.previousSibling;
		}
		return naukriFrameWork((elem && elem.nodeType!=1)?elem.previousSibling:elem);
		}
		return me;
	}
	me.next = function () {
		if(el[0]){
		var elem=el[0].nextSibling;
		while(elem && elem.nodeType!=1){
			elem = elem.nextSibling;
		}
		return naukriFrameWork((elem && elem.nodeType!=1)?elem.nextSibling:elem);
		}
		return me;
	}
	
	//I am setting a global variable to find out browser for further use	
	var currApp=(navigator.appName=='Netscape')?true:false;
	me.slideUp=function(){	 
		var sstyle=0;
		for(var i=0;i<me.length;i++){	
			var padT=parseInt(me.eq(i).getStyle(me.eq(i).currObj(),(currApp?'padding-top':'paddingTop')));
			padT+=parseInt(me.eq(i).getStyle(me.eq(i).currObj(),(currApp?'padding-bottom':'paddingBottom')));
			var offH=(me.eq(i).height())-(padT+2);	
			sstyle=offH;
			if(offH>0)
			var t=setInterval(function(){
				offH-=5;
				me.eq(i).css({height:offH+'px',overflow:'hidden'});
				if(offH<5){clearInterval(t);me.eq(i).css({height:sstyle+'px'});me.eq(i).hide();};						
			},arguments[0]||1);
 		}
	}//slideUp end here		
	
	me.slideDown=function(){
		var x=0;
		for(var i=0;i<me.length;i++){
			me.eq(i).show();
			var padT=parseInt(me.eq(i).getStyle(me.eq(i).currObj(),(currApp?'padding-top':'paddingTop')));
			padT+=parseInt(me.eq(i).getStyle(me.eq(i).currObj(),(currApp?'padding-bottom':'paddingBottom')));
			var offH=(me.eq(i).height())-(padT+2);
			me.eq(i).css({height:x+'px',overflow:'hidden'});
			
			if(offH>x)
			var t=setInterval(function(){								  
				x+=5;me.eq(i).css({height:x+'px',overflow:'hidden'})
				if(x==offH||x>=offH){clearInterval(t);me.eq(i).show()};
			},arguments[0]||1);
		 }
	}//slideDown end here		

	me.slideToggle=function(){
		var para=arguments[0]||null;
		for(var i=0;i<me.length;i++){var elH=me.eq(i).height();
			(elH==0||elH<1)?me.eq(i).slideDown(para):me.eq(i).slideUp(para);
	 	}
	}//slideToggle end here

	me.fadeOut=function(){
		var value=10;
		var t=(arguments[0]&& arguments[0]>50 && arguments[0]<500)?arguments[0]:50;
		for(var i=0;i<me.length;i++){
			var padT=me.eq(i).getStyle(me.eq(i).currObj(),'display');
			if(padT=='none'){return ''}
			if(value>0){
				var t=setInterval(function(){
					value--;
					if(currApp){me.eq(i).css({opacity:value/10})}
					else {me.eq(i).css({filter:'alpha(opacity='+value*10+')',zoom:1})}
					if(value==0||value<0){clearInterval(t);me.eq(i).hide();}
				},t)			
			}		
		}
		return me;	
	}
	
	me.fadeIn=function(){
		var value=0;
		var t=(arguments[0]&& arguments[0]>50 && arguments[0]<500)?arguments[0]:50;
		for(var i=0;i<me.length;i++){
			var padT=me.eq(i).getStyle(me.eq(i).currObj(),'display');
			if(padT=='block'){return ''}
			if(value<10){
				var t=setInterval(function(){
					value++;
					if(currApp){me.eq(i).css({opacity:value/10})}
					else {me.eq(i).css({filter:'alpha(opacity='+value*10+')',zoom:1})}
					me.eq(i).show();
					if(value==10||value>10){clearInterval(t);me.eq(i).show();}
				},t)			
			}		
		}
		return me;	
	}
	

	me.removeAttr=function(a){
		var attr=a;
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
			var ieversion=new Number(RegExp.$1);if(ieversion<=7)attr=(me.ieFix[a])?me.ieFix[a]:a;
		}
		for(var i=0;i<me.length;i++){me.eq(i).currObj().removeAttribute(attr);}
	}//removeAttr end here
	
  me.ready = function(i) {
      var u = navigator.userAgent.toLowerCase();
      var ie = /*@cc_on!@*/false;
      if ((/mozilla/.test(u) && !/(compatible)/.test(u)) || (/opera/.test(u))) {
    // opera/moz
      el.addEventListener("DOMContentLoaded",i,false);
      } else if (/webkit/.test(u)) {
      // safari
      timeout = setTimeout(function(){
          if ( el.readyState == "loaded" ||
            el.readyState == "complete" ) {
            i();
          } else {
            setTimeout(arguments.callee,10);
          }
        }, 10);
      }  else if (ie) {
      // IE
      (function (){
        var tempNode = el.createElement('document:ready');
        try {
        tempNode.doScroll('left');
        i();
        tempNode = null;
        } catch(e) {
        setTimeout(arguments.callee, 0);
       }
     })();
    } else {
      window.onload = i;
    }
  }

	return me;
	
}



$n.fn = chainingFunction.prototype;
chainingFunction.prototype.ajaxReq = function(param){
	var xhr = null;
	
	this.createXHR = function(){(window.XMLHttpRequest) ? xhr = new XMLHttpRequest() : xhr = new ActiveXObject("Microsoft.XMLHTTP"); return xhr;};
	
	var type = param.type;
	var async = param.async;
	var datatype = param.datatype;
	var data = param.data;
	var url = param.url;
	var success = param.success;
	var error = param.error;
	
	if(!url) {alert("URL not specified"); return false;}
	if(!success){alert("Success not specified"); return false;}
	if(!type || type=='get') {type = 'get'; if(data) {url+='?'+data; data='';} else data=''};
	async = (typeof async == 'undefined' || async) ? true : false;
	if(!datatype) datatype = 'text';
	if(!error){error=function(){}}
	
	this.createXHR();
	xhr.open(type.toUpperCase(),url,async);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
									if(xhr.readyState == 4 && xhr.status==200){
										
										switch (datatype.toLowerCase())
										{
											 case 'text':
													success(xhr.responseText);
													break;
											 case 'xml':
													success(xhr.responseXML);
													break;
											 case 'json':
													success(eval("("+xhr.responseText+")"));
													break;
											 default:
													alert('Please correct your data type (i.e. text, xml or json)');
													break;
										}
									}
									else if(xhr.readyState == 4 && xhr.status==404) 
									error()
								};
	xhr.send(data);			
}
$n.trim=function(str, chars) {
                return $n.ltrim($n.rtrim(str, chars), chars);
}
$n.ltrim=function(str, chars) {
                chars = chars || "\\s";
                return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
$n.rtrim=function(str, chars) {
                chars = chars || "\\s";
                return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

$n.preventDefault=function(e){
	e=(!e)?window.event:e;
	if ( e.preventDefault ) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}

$n.stopPropagation=function(e){
	e=(!e)?window.event:e;
	if ( e.stopPropagation ) {
		e.stopPropagation();
	}
	else{
		e.cancelBubble = true;
	}
}