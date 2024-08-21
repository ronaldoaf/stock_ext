




setInterval(()=>{
	if (location.href=='https://app.vest.investments/vest/portfolio') {
		chrome.storage.local.set( {lista: [...document.querySelectorAll('a.flex.items-center')].map(e=>e.getAttribute('href').split('/')[3]) });

	}
	
	
	if (location.href=='https://www.tradingview.com/screener/') {
		chrome.storage.local.get({lista:[]}, (res)=> {
			[...document.querySelectorAll('.tickerName-GrtoTeat, [class*="symbolNameBox"]')].map(e=>{
				if(res.lista.includes(e.innerText)) {
					e.style.backgroundColor='lightgreen';
					e.style.fontSize='25px';
				}
			});
		});
	}
	
},1000);
