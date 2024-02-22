for (const btn of document.querySelectorAll(".job-button, .education-button")) {
	btn.addEventListener("click", showJobDescription);

	function showJobDescription(e) {
		const jobRefs = document.querySelectorAll(".job, .education");

		for (const jobRef of jobRefs) {
			jobRef.classList.add("hide");
		}
		jobRefs[e.currentTarget.dataset.index].classList.remove("hide");
	}
};
