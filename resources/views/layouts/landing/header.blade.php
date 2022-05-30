<header>
    <div class="navbar-div bg-color-primary">
        <nav class="navbar navbar-expand-md">
            <div class="container">
                <a class="navbar-brand" href="{{route('home')}}">
                    @php($logo=\App\CentralLogics\Helpers::get_settings('logo'))
                    <img  onerror="this.src='{{asset('public/assets/admin/img/160x160/img2.jpg')}}'"
                          src="{{asset('storage/app/public/business/'.$logo)}}"
                          style="height:auto;width:100%; max-width:200px; max-height:60px">
                </a>
                <button style="background: #FFFFFF; border-radius: 2px;font-size: 13px" class="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarNav">
                   ....
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto"></ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link navbar-font" href="{{route('home')}}">{{__('messages.home')}} <span
                                    class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-font" href="{{$landing_page_links['web_app_url']}}">{{__('messages.browse_web')}}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-font" href="{{route('terms-and-conditions')}}">{{__('messages.terms_and_condition')}}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-font" href="{{route('about-us')}}">{{__('messages.about_us')}}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-font" href="{{route('contact-us')}}">{{__('messages.contact_us')}}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-font" href="{{route('privacy-policy')}}">{{__('messages.privacy_policy')}}</a>
                        </li>
                    @if($toggle_dm_registration || $toggle_restaurant_registration)
                        <li class="nav-item dropdown">
                            <a class="nav-link navbar-font dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{__('messages.join_us')}}
                            </a>
                            <div class="dropdown-menu dropdown-menu-right bg-color-primary" aria-labelledby="dropdownMenuButton">
                                @if($toggle_restaurant_registration)
                                    <a class="dropdown-item navbar-font" href="{{route('restaurant.create')}}">
                                        {{__('messages.restaurant_registration')}}
                                    </a>
                                    @if ($toggle_dm_registration)
                                    <div class="dropdown-divider"></div>
                                    @endif
                                @endif
                                @if ($toggle_dm_registration)
                                    <a class="dropdown-item navbar-font" href="{{route('deliveryman.create')}}">
                                        {{__('messages.deliveryman_registration')}}
                                    </a>
                                @endif
                            </div>
                            <!-- <a class="nav-link navbar-font" href="{{route('privacy-policy')}}">{{__('messages.privacy_policy')}}</a> -->
                        </li>
                    @endif
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>