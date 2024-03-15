export const darkThemeStyle = () => 
{

    const styleElement = document.createElement('style');

    // style for dark mode
    styleElement.textContent = `

    .main
    {
        background-color: black;
        color: white;
    }

    .top-main 
    {
        border-bottom: 2px solid #390da0;
        background-color: black;
        box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.9);

    }

    .nav-link,.navbar-toggler
    {
        color:white !important;
    }

    .skill-btn
    {
        color : white !important;
    }

    `;

    return styleElement;
  };
  