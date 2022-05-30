<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    @php($logo=\App\Models\BusinessSetting::where(['key'=>'logo'])->first()->value)
    <link rel="shortcut icon" href="">
    <link rel="icon" type="image/x-icon" href="{{asset('storage/app/public/business/'.$logo??'')}}">

    <!-- Bootstrap+JQuery -->
    <link rel="stylesheet" href="{{asset('public/assets/landing/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('public/assets/landing/css/bootstrap.min.css')}}">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>


    <!-- bootstrap js -->
    <script src="{{asset('public/assets/landing/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('public/assets/landing/js/main.js')}}"></script>
    <script src="{{asset('public/assets/landing/js/polyfills.js')}}"></script>
    <script src="{{asset('public/assets/landing/js/runtime.js')}}"></script>
    <script src="{{asset('public/assets/landing/js/script.js')}}"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.transitions.css">

    <!-- fontawesome -->
    <link rel="stylesheet" href="{{asset('public/assets/landing/fontawesome/css/all.min.css')}}">
    <link rel="stylesheet" href="{{asset('public/assets/landing/fontawesome/css/fontawesome.min.css')}}">

    <!-- Normalize CSS -->
    <link rel="stylesheet" href="{{asset('public/assets/landing')}}/css/normalize.css">

    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">

    <!-- Custom CSS -->
    <!-- <link rel="stylesheet" href="{{asset('public/assets/landing/css/main.css')}}"> -->
   
    @stack('css_or_js')
</head>

<body>
    @php($landing_page_text = \App\Models\BusinessSetting::where(['key'=>'landing_page_text'])->first())
    @php($landing_page_text = isset($landing_page_text->value)?json_decode($landing_page_text->value, true):null)
    
    @php($landing_page_links = \App\Models\BusinessSetting::where(['key'=>'landing_page_links'])->first())
    @php($landing_page_links = isset($landing_page_links->value)?json_decode($landing_page_links->value, true):null)
    

    <style>
        a {
            text-decoration: none;
        }
    </style>

 <!-- header -->
 <div>
        <div class="navbar-area fixed-top">
            <div class="mobile-nav"><a routerlink="/" class="logo" href="/"><img src="assets/img/logo-two.png"
                        alt="Logo"></a></div>
            <div class="main-nav main-nav-two">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        @php($logo=\App\CentralLogics\Helpers::get_settings('logo'))    
                        <a class="navbar-brand" href="/">
                            <img src="{{url('public/assets/landing/img/logo-two.png')}}" alt="Logo" class="nav-two-logo-one">
                            <img src="{{url('public/assets/landing/img/logo.png')}}" alt="Logo" class="nav-two-logo-two">
                        </a>
                        <div id="navbarSupportedContent" class="collapse navbar-collapse mean-menu"
                            style="display: block;">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="javascript:void(0)" class="nav-link dropdown-toggle">
                                {{__('messages.home')}} 
                                <!-- <span class="sr-only">(current)</span> -->
                                </a>
                                </li>
                                <li class="nav-item"><a routerlink="/about" routerlinkactive="active" class="nav-link"
                                href="{{route('about-us')}}">{{__('messages.about_us')}}</a></li>
                                <li class="nav-item"><a routerlink="/categories" routerlinkactive="active"
                                        class="nav-link" href="/categories">Categories</a></li>
                                <li class="nav-item"><a href="javascript:void(0)"
                                        class="nav-link dropdown-toggle">Services <i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a routerlink="/services" routerlinkactive="active"
                                                class="nav-link" href="/services">Services</a></li>
                                        <li class="nav-item"><a routerlink="/services-details" routerlinkactive="active"
                                                class="nav-link" href="/services-details">Services Details</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a href="javascript:void(0)" class="nav-link dropdown-toggle">Blog
                                        <i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a routerlink="/blog" routerlinkactive="active"
                                                class="nav-link" href="/blog">Blog</a></li>
                                        <li class="nav-item"><a routerlink="/blog-details" routerlinkactive="active"
                                                class="nav-link" href="/blog-details">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a routerlink="/contact" routerlinkactive="active" class="nav-link"
                                href="{{route('contact-us')}}">{{__('messages.contact_us')}}</a></li>
                            </ul>
                            <div class="side-nav">
                                <button type="button" data-toggle="modal" data-target="#myModalRight" class="btn modal-btn"><i
                                        class="bx bx-menu-alt-right"></i></button></div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div id="myModalRight" tabindex="-1" role="dialog" class="modal fade modal-right">
            <div role="document" class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"><img src="assets/img/logo.png" alt="Logo"><button type="button"
                            data-dismiss="modal" aria-label="Close" class="close"><span
                                aria-hidden="true">×</span></button></div>
                    <div class="modal-body">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid quas
                            qui minus! Dolor, ad. Odit, ullam perspiciatis nesciunt numquam explicabo, sunt ipsa libero
                            ipsum maiores officia eius reprehenderit exercitationem.</p>
                        <div class="image-area">
                            <h2>Instagram</h2>
                            <div class="row">
                                <div class="col-lg-4"><a _ngcontent-smc-c8="" href="#" target="_blank"><img
                                            _ngcontent-smc-c8="" src="assets/img/home-one/blog1.jpg"
                                            alt="Instagram"></a></div>
                                <div class="col-lg-4"><a _ngcontent-smc-c8="" href="#" target="_blank"><img
                                            _ngcontent-smc-c8="" src="assets/img/home-one/blog2.jpg"
                                            alt="Instagram"></a></div>
                                <div class="col-lg-4"><a _ngcontent-smc-c8="" href="#" target="_blank"><img
                                            _ngcontent-smc-c8="" src="assets/img/home-one/blog3.jpg"
                                            alt="Instagram"></a></div>
                                <div class="col-lg-4"><a _ngcontent-smc-c8="" href="#" target="_blank"><img
                                            _ngcontent-smc-c8="" src="assets/img/home-one/blog4.jpg"
                                            alt="Instagram"></a></div>
                                <div class="col-lg-4"><a _ngcontent-smc-c8="" href="#" target="_blank"><img
                                            _ngcontent-smc-c8="" src="assets/img/home-one/blog5.jpg"
                                            alt="Instagram"></a></div>
                                <div class="col-lg-4"><a _ngcontent-smc-c8="" href="#" target="_blank"><img
                                            _ngcontent-smc-c8="" src="assets/img/home-one/blog6.jpg"
                                            alt="Instagram"></a></div>
                            </div>
                        </div>
                        <div class="social-area">
                            <h3>Our Social Contact</h3>
                            <ul>
                                <li><a href="#" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
{{-- header ends --}}
@yield('content')

  <!-- footer -->
  <div>
    <footer class="footer-area-two pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        @php($logo=\App\CentralLogics\Helpers::get_settings('logo'))
                        <div class="footer-logo">
                            <a routerlink="/" href="/">
                                <img class="rounded float-left"
                                onerror="this.src='{{asset('public/assets/admin/img/160x160/img2.jpg')}}'"
                                src="{{asset('storage/app/public/business/'.$logo)}}"
                                style="max-width: 200px;max-height: 75px">
                            </a>
                            <p>{{isset($landing_page_text)?$landing_page_text['footer_article']:''}}</p>
                            <div class="footer-subscribe footer-subscriber-two"><input type="email"
                                    placeholder="Enter your email" class="form-control"><button type="submit"
                                    class="btn footer-btn"><i class="bx bxs-send bx-flashing"></i></button></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-services">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/contact"><i class="bx bx-chevron-right"></i>
                                        Support</a></li>
                                <li><a href="{{route('about-us')}}"><i class="bx bx-chevron-right"></i>
                                    {{__('messages.about_us')}}</a></li>
                                <li><a href="/chefs"><i class="bx bx-chevron-right"></i>
                                        Chefs</a></li>
                                <li><a href="#"><i class="bx bx-chevron-right"></i> Blog</a>
                                </li>
                                <li><a href="{{route('privacy-policy')}}"><i
                                            class="bx bx-chevron-right"></i>{{__('messages.privacy_policy')}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-services">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#"><i class="bx bx-chevron-right"></i>
                                        Services</a></li>
                                <li><a href="#"><i
                                            class="bx bx-chevron-right"></i> Food Collection</a></li>
                                <li><a href="online-order"><i
                                            class="bx bx-chevron-right"></i> Online Order</a></li>
                                <li><a href="#"><i class="bx bx-chevron-right"></i> Blog</a>
                                </li>
                                <li><a href="{{route('contact-us')}}"><i class="bx bx-chevron-right"></i>
                                    {{__('messages.contact_us')}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="footer-item">
                        <div class="footer-services">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><a href="tel:+1123456789"><i class="bx bx-phone-call"></i>{{\App\CentralLogics\Helpers::get_settings('phone')}}</a>
                                </li>
                                <li><a href="tel:+5143456768"><i class="bx bx-phone-call"></i> +91 8770233385</a>
                                </li>
                                <li><a href="mailto:info@spiz.com"><i class="bx bx-message-detail"></i>
                                        support@rassoihomefood.com</a>
                                </li>
                                <li><a href="mailto:hello@spiz.com"><i class="bx bx-message-detail"></i>
                                    {{\App\CentralLogics\Helpers::get_settings('email_address')}}</a></li>
                                <li><i class="bx bx-location-plus"></i>
                                    {{\App\CentralLogics\Helpers::get_settings('address')}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright-area copyright-area-two">
        <div class="container">
            <div class="copyright-item">
                {{\App\CentralLogics\Helpers::get_settings('footer_text')}}
                <p>Copyright @2018 Rassoi Home Food. All Rights Reserved By <a href="#"
                        target="_blank">{{\App\CentralLogics\Helpers::get_settings('business_name')}}</a></p>
                        
            </div>
        </div>
    </div>
</div>

<!-- Scrips Starts -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>

<script>
    $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 1],
            pagination: true,
            autoPlay: true
        });

        $("#why-choose-us-slider").owlCarousel({
            items: 3,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [767, 1],
            pagination: true,
            autoPlay: true
        });
    });
</script>
@stack('script_2')
</body>

</html>
