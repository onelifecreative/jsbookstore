var BookStore = (function() {
	
	function BookStore(input,table,obj){

		this.table = table[0];
		this.books = obj;

		var inputFilter = input;
		inputFilter.oninput = this.createTmpl.bind(this);
		
		this.drawTable(obj);
	}
	
	BookStore.prototype.createTmpl = function(e) {
		
		var regTemplate = new RegExp(e.target.value, 'gim');
		this.findValue(regTemplate);
	};

	BookStore.prototype.findValue = function(tmpl) {

		var tab = [];

		Array.prototype.filter.call(this.books,function(book){

			var bookItem = JSON.stringify(book);

			if (tmpl.test(bookItem)) {

				tab.push(JSON.parse(bookItem));
			}

		}.bind(this));

		this.drawTable(tab);

	};
	BookStore.prototype.drawTable = function(obj) {

		this.table.innerHTML = "";	
		Array.prototype.forEach.call(obj,function(el){
			
			var node = this.template(el);

			this.table.insertAdjacentHTML('beforeend', node);

		}.bind(this));
	};
	BookStore.prototype.template = function(obj) {

		var template = '<tr><td>{{id}}</td><td><img src="{{cover}}"></td><td>{{book}}</td><td>{{author}}</td><td><a href="{{link}}" target="_blank">{{link}}</a></td><td>{{lvl}}</td></tr>';

			template = template.replace('{{id}}',obj.id);
			template = template.replace('{{cover}}',obj.cover);
			template = template.replace('{{book}}',obj.book);
			template = template.replace('{{author}}',obj.author);
			template = template.replace('{{link}}',obj.link);
			template = template.replace('{{link}}',obj.link);
			template = template.replace('{{lvl}}',obj.lvl);
		
		return template;
	};

	return BookStore;
})();


var jsMarket = new BookStore(document.getElementById('findBooks'),document.querySelectorAll('#books-list'),obj);










