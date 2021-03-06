const data = [
	{
		year: '1991',
		content: {
			servidor: ['Python'],
			extra: ['Vim'],
		},
	},
	{
		year: '1994',
		content: {
			cliente: ['Netscape'],
		},
	},
	{
		year: '1995',
		content: {
			cliente: [
				'Apache',
				'Guerra de los navegadores',
				'Internet Explorer',
				'Opera',
				'JavaScript',
			],
			servidor: ['JDK Beta', 'PHP'],
			extra: ['Mysql'],
		},
	},
	{
		year: '1996',
		content: {
			servidor: ['JDK 1.0'],
		},
	},
	{
		year: '1997',
		content: {
			cliente: ['ECMAScript 1'],
			servidor: ['JDK 1.1'],
		},
	},
	{
		year: '1998',
		content: {
			cliente: ['ECMAScript 2'],
			servidor: ['J2SE 1.2'],
			extra: ['PhpMyAdmin'],
		},
	},
	{
		year: '1999',
		content: {
			cliente: ['ECMAScript 3'],
			extra: ['Tomcat'],
		},
	},
	{
		year: '2000',
		content: {
			servidor: ['J2SE 1.3', 'Struts'],
		},
	},
	{
		year: '2001',
		content: {
			servidor: ['Hibernate', 'Eclipse'],
		},
	},
	{
		year: '2002',
		content: {
			cliente: ['Firefox'],
			servidor: ['J2SE 1.4'],
			extra: ['Hikari'],
		},
	},
	{
		year: '2003',
		content: {
			cliente: ['Safari'],
		},
	},
	{
		year: '2004',
		content: {
			servidor: ['J2SE 5.0', 'Maven', 'Spring'],
		},
	},
	{
		year: '2005',
		content: {
			servidor: ['CakePHP'],
			extra: ['Git'],
		},
	},
	{
		year: '2006',
		content: {
			cliente: ['JQuery'],
			servidor: ['Java SE 6', 'JPA'],
			extra: ['Liquibase', 'Sonarqube'],
		},
	},
	{
		year: '2007',
		content: {
			servidor: ['Gradle'],
		},
	},
	{
		year: '2008',
		content: {
			cliente: ['Chrome', 'V8'],
			servidor: ['Gson'],
			extra: ['Github'],
		},
	},
	{
		year: '2009',
		content: {
			cliente: ['ECMAScript 5', 'Underscore'],
			servidor: ['NodeJS'],
		},
	},
	{
		year: '2010',
		content: {
			cliente: ['Angular JS'],
			servidor: ['NPM', 'Express'],
		},
	},
	{
		year: '2011',
		content: {
			cliente: ['RxJS'],
			servidor: ['Java SE 7', 'Laravel'],
		},
	},
	{
		year: '2012',
		content: {
			cliente: ['TypeScript'],
		},
	},
	{
		year: '2013',
		content: {
			cliente: ['React'],
			servidor: ['JHipster', 'Django'],
			extra: ['Docker'],
		},
	},
	{
		year: '2014',
		content: {
			cliente: ['Vue'],
			servidor: ['Java SE LTS 8', 'Spring boot'],
		},
	},
	{
		year: '2015',
		content: {
			cliente: ['Edge', 'ECMAScript 6', 'Redux'],
			servidor: ['Spring roo', 'Symfony'],
			extra: ['VSCode'],
		},
	},
	{
		year: '2016',
		content: {
			cliente: ['Angular', 'ECMAScript 2016'],
		},
	},
	{
		year: '2017',
		content: {
			cliente: ['ECMAScript 2017'],
			servidor: ['Java SE 9'],
		},
	},
	{
		year: '2018',
		content: {
			cliente: ['ECMAScript 2018'],
			servidor: ['Java SE 10', 'Java SE 11 LTS'],
		},
	},
	{
		year: '2019',
		content: {
			cliente: ['Flux', 'ECMAScript 2019'],
			servidor: ['Java SE 12', 'Java SE 13', 'Spring security', 'Intellij'],
		},
	},
	{
		year: '2020',
		content: {
			cliente: ['ECMAScript 2020', 'Travis'],
			servidor: ['Java SE 14', 'Java SE 15', 'Ant'],
		},
	},
	{
		year: '2021',
		content: {
			cliente: ['Backbone', 'ECMAScript 2021'],
			servidor: ['Java SE 16', 'Java SE LTS 17'],
			extra: ['Github actions'],
		},
	},
];

function fillContent(buttonValue) {
	cleanTimeLine();
	let content;
	data.forEach((response, index) => {
		if (buttonValue === 'frontend') {
			content = response.content.cliente;
		} else if (buttonValue === 'backend') {
			content = response.content.servidor;
		} else {
			content = response.content.extra;
		}
		if (content != undefined) {
			document.getElementById('timeline').innerHTML += `
				   <div class="card">
					<h2>${response.year}</h2>
									<p>${content}</p>
					</div>`;
			if (index != data.length - 1) {
				document.getElementById('timeline').innerHTML += `
													<div class="vertical"></div>`;
			}
		}
	});
}

function cleanTimeLine() {
	document.getElementById('timeline').innerHTML = '';
}
