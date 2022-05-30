<footer>
    <div class="footer-div">
        <!-- Footer Start -->
        <footer class="footer-background text-white text-lg-start">
            <!-- Grid container -->
            <div class="container">
                <!--Grid row-->
                <div class="row d-flex justify-content-center justify-content-md-start text-center text-md-left">
                    <!--Grid column-->
                    <div class="col-lg-3 col-md-3 mb-md-0 company_details">
                        <div
                            class="row d-flex justify-content-center justify-content-md-start text-center text-md-left">
                            <div class="col-md-12 col-sm-12 d-flex justify-content-center justify-content-md-start text-center text-md-left"
                                 style="padding: 0">
                                <a class="" href="#">
                                    @php($logo=\App\CentralLogics\Helpers::get_settings('logo'))
                                    <img class="rounded float-left"
                                         onerror="this.src='{{asset('public/assets/admin/img/160x160/img2.jpg')}}'"
                                         src="{{asset('storage/app/public/business/'.$logo)}}"
                                         style="max-width: 200px;max-height: 75px">
                                </a>
                            </div>
                        </div>

                        <div class="footer-article-div">
                                <span class="footer-article">
                                {{isset($landing_page_text)?$landing_page_text['footer_article']:''}}
                                </span>
                        </div>

                        <div class="mt-4">
                            <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-white" style="margin-left: 44px"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a href="#" class="text-white" style="margin-left: 44px"><i
                                    class="fab fa-linkedin"></i></a>
                            <a href="#" class="text-white" style="margin-left: 44px"><i
                                    class="fab fa-skype"></i></a>
                        </div>
                    </div>

                    <hr class="hr-footer-m">

                    <div class="col-lg-2 col-md-2 mb-0 mb-md-0"></div>
                    <!--Grid column-->
                    <div class="col-lg-2 col-md-2 mb-md-0 footer-items">
                        <span class="footer-title text-uppercase mb-4">{{__('messages.support')}}</span>

                        <ul class="list-unstyled">
                            <li>
                                <a href="{{route('about-us')}}" class="footer-item text-white">{{__('messages.about_us')}}</a>
                            </li>
                            <li>
                                <a href="{{route('contact-us')}}" class="footer-item text-white">{{__('messages.contact_us')}}</a>
                            </li>
                            <li>
                                <a href="{{route('privacy-policy')}}" class="footer-item text-white">{{__('messages.privacy_policy')}}</a>
                            </li>
                            <li>
                                <a href="{{route('terms-and-conditions')}}" class="footer-item text-white">{{__('messages.terms_and_condition')}}</a>
                            </li>
                        </ul>
                    </div>

                    <hr class="hr-footer-m">

                    <!--Grid column-->
                    <div class="col-lg-2 col-md-2 mb-md-0 footer-items">
                        <span class="footer-title text-uppercase mb-4">Download</span>

                        <ul class="list-unstyled">
                            <li>
                                <a href="{{$landing_page_links['app_url_android']}}" class="footer-item text-white">Play Store</a>
                            </li>
                            <li class="mb-2">
                                <a href="{{$landing_page_links['app_url_ios']}}" class="footer-item text-white">App Store</a>
                            </li>
                        </ul>
                    </div>

                    <hr class="hr-footer-m">

                    <!--Grid column-->
                    <div class="col-lg-3 col-md-3 mb-md-0 footer-items">
                        <span class="footer-title text-uppercase mb-4">Contact Us</span>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="footer-item text-white">
                                    <i class="fas fa-map-marker-alt mr-2"></i>
                                    <span>{{\App\CentralLogics\Helpers::get_settings('address')}}</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="mailto:{{\App\CentralLogics\Helpers::get_settings('email_address')}}" class="footer-item text-white">
                                    <i class="fas fa-envelope MR-1"></i>
                                    <span class="ml-1">{{\App\CentralLogics\Helpers::get_settings('email_address')}}</span>
                                </a>
                            </li>
                            <li class="mb-2">
                                <a href="tel:{{\App\CentralLogics\Helpers::get_settings('phone')}}" class="footer-item text-white">
                                    <i class="fas fa-phone MR-1"></i>
                                    <span class="ml-1">{{\App\CentralLogics\Helpers::get_settings('phone')}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr class="hr-footer-m">
                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center" style="background-color: rgba(0, 0, 0, 0.2);font-size: 12px">
                {{\App\CentralLogics\Helpers::get_settings('footer_text')}}
                <a class="text-white" href="#">{{\App\CentralLogics\Helpers::get_settings('business_name')}}</a>
            </div>
        </footer>
    </div>
</footer>