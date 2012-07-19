/*!
 * jQuery myCustomCheckbox
 *
 * Copyright (c) 2012 Osipov A. E.
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *	jquery-1.7.2.js
 */
(function($) {
	var methods = {
		init : function(options) {

			/*
				options = {
					activate : {containerId1 : 5, containerId2 : 2, ... }
				}
			*/

			function template(templ, name, title) {
				return templ.replace(/{{name}}/g, name)
					.replace(/{{title}}/g, title);
			};

			function innerHtml(containerId, count, templ) {
				var i = 0,
					t = '';
				for (i = 0; i < count; i++) {
					t += template(templ, 'name' + i, 'title ' + i);
				}

				document.getElementById(containerId).innerHTML = '<ul>' + t + '</ul>';
			}

			return this.each(function() {
				var templ = document.getElementById('templ'),
					id = this.id;

				templ = !!templ ? templ.innerHTML : '<li><input type="checkbox" name={{name}} id={{name}}/><label for={{name}}>{{title}}</label></li>';

				return innerHtml(id, options.activate[id], templ);
			});
		},
		show : function() {
			/*
			$('<style type="text/css">' +
				'ul, li {'+
					'font-size: 14px;'+
					'line-height: 14px;'+
					'list-style-type: none;'+
					'margin: 2px 0;'+
				'}'+
				'label {'+
					'cursor: pointer;'+
				'}'+
				'.useCustomCheckbox {' +
					'background-image: url("check.gif");' +
					'background-repeat: no-repeat;' +
					'display: block;' +
					'height: 14px;' +
					'line-height: 14px;' +
					'padding-left: 18px;' +
				'}' +
				'.selectedTrue {' +
					'background-position: 0 -14px;' +
				'}' +
				'.selectedFalse {' +
					'background-position: 0 0px;' +
				'}' +
			'</style>').appendTo("head");
			*/
			return $('input[type="checkbox"]').each(function() {
				var $self = $(this);

				$self
					.hide()
					.next() // use label for display custom checkbox
						.addClass('useCustomCheckbox')
						.addClass('selectedFalse')
						.on('click', function() {
							var $label = $(this);

							$label.toggleClass('selectedTrue')
								.toggleClass('selectedFalse');

							$self.attr('checked', $label.hasClass('selectedTrue') ? true : false);
						});
			});
		}
	};

	$.fn.myCustomCheckbox = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.myCustomCheckbox' );
		}
	};
})( jQuery );