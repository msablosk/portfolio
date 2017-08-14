angular.module('notey').factory('notes', [function () {
	var o = {
		notes: [
			{subject: 'first', body: "what a lovely day for a note"},
			{subject: 'second', body: "indeed, what a lovely day for a note"},
			{subject: 'third', body: "truly, what a lovely day for a note"},
		]
	};

	return o;
}])