export const darkThemeStyle = () => 
{

    const styleElement = document.createElement('style');

    // style for dark mode
    styleElement.textContent = `

    .main
    {
        // background-color: black;
        // color: white;
        background: linear-gradient(90deg, #000000, #390da0);
    }

    .top-main 
    {
        border-bottom: 2px solid #390da0;
        // background-color: black;
        background: linear-gradient(90deg, #000000, #390da0);
        box-shadow: 0px 7px 30px rgba(57, 13, 160, 1);
    }

    .project-pic img {
        box-shadow: 0px 5px 30px rgba(57, 13, 160, 1);
    }
    
    .home-part2 img {
        // box-shadow: 0px 5px 30px rgba(57, 13, 160, 1);
    }

    .view-project a{
        color: #00bfff;
    }

    // .nav-link,.navbar-toggler
    // {
    //     color:white !important;
    // }

    // .skills .skill-btn
    // {
    //     color : white !important;
    // }

    `;

    return styleElement;
  };
  