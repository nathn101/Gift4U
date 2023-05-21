import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Gift4U</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#"> Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> Explore </a>
            </li>
            <li class="nav-item">
                <a class="nav-link font-weight-bold" href="#"> Login </a>
            </li>
            </ul>
        </div>
        </nav>
    )

}