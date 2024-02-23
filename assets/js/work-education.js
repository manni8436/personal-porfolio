for (const btn of document.querySelectorAll(".job-button, .education-button")) {
	btn.addEventListener("click", showJobDescription);

	function showJobDescription(e) {
		const jobRefs = document.querySelectorAll(".job, .education");

		if (jobRefs[e.currentTarget.dataset.index].classList.contains("hide")) {
			jobRefs[e.currentTarget.dataset.index].classList.remove("hide");
			for (const jobRef of jobRefs) {
				if (jobRef != jobRefs[e.currentTarget.dataset.index]) {
					jobRef.classList.add("hide");
				}
			}
		} else {
			jobRefs[e.currentTarget.dataset.index].classList.add("hide");
		}
	}
};
