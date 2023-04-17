var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
		function register()
		{
			x.style.left='-400px';
			y.style.left='50px';
			z.style.left='110px';
		}
		function login()
		{
			x.style.left='50px';
			y.style.left='450px';
			z.style.left='0px';
		}
	
        var modal = document.getElementById('login-form');
        window.onclick = function(event) 
        {
            if (event.target == modal) 
            {
                modal.style.display = "none";
            }
        }


		const btnEl = document.querySelector('.btn');
const iconEl = document.querySelector('.icons');
const toggleOptions = () => {
    const wrapper = document.querySelector('.wrapper');
    console.log(iconEl);
    wrapper.classList.toggle('active');
    if (iconEl.classList.contains('fa-share-alt')) {
        iconEl.classList.replace('fa-share-alt','fa-close');
    } else {
        iconEl.classList.replace('fa-close', 'fa-share-alt');
    }
};
btnEl.addEventListener('click', toggleOptions);

// function check()
// {
//     var username=document.getElementById("email");
//     var password=document.getElementById("pass");
//     if(username.value=="" ||password=="");
//     {
//         alert("No blank values allowed");
//         return false;
//     }
//   else
//     {
//         true;
//     }
// }