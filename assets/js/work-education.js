document.addEventListener('click', function (event) {
		if(event.target.classList.contains('briefcase')) {
			let jobDescription = document.getElementsByClassName('metroline-job');

			if(jobDescription[0].classList.contains('hide')) {
				jobDescription[0].classList.remove('hide');
			} else {
				jobDescription[0].classList.add('hide');
			}
		}
});
