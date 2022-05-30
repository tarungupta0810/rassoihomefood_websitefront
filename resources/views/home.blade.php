@extends('layouts.landing.app')

@section('title','Landing Page | '.\App\Models\BusinessSetting::where(['key'=>'business_name'])->first()->value??'Stack Food')

@section('content')

    <main>
        @php($front_end_url=\App\Models\BusinessSetting::where(['key'=>'front_end_url'])->first())
        @php($front_end_url=$front_end_url?$front_end_url->value:null)

        @php($landing_page_text = \App\Models\BusinessSetting::where(['key'=>'landing_page_text'])->first())
        @php($landing_page_text = isset($landing_page_text->value)?json_decode($landing_page_text->value, true):null)
        
        @php($landing_page_links = \App\Models\BusinessSetting::where(['key'=>'landing_page_links'])->first())
        @php($landing_page_links = isset($landing_page_links->value)?json_decode($landing_page_links->value, true):null)

        @php($landing_page_images = \App\Models\BusinessSetting::where(['key'=>'landing_page_images'])->first())
        @php($landing_page_images = isset($landing_page_images->value)?json_decode($landing_page_images->value, true):null)

          <!-- hero section -->
    <div class="banner-area-two">
        <div class="banner-shape">
            <img src="{{ url('public/assets/landing/img/home-two/banner/1.png') }}" alt="Shape">
            <img src="{{ url('public/assets/landing/img/home-two/banner/2.png') }}" alt="Shape">
            <img src="{{ url('public/assets/landing/img/home-two/banner/3.png') }}" alt="Shape"></div>
        <div class="container">
            <div class="banner-content">
                <h1>Free Home Delivery Within an Hour</h1>
                <p>A restaurant or an eatery, is a business that prepares and serves food and
                    drinks to customers. Meals are generally served and eaten on the premises, but many.</p>
                <div class="banner-btn-wrap"><a class="cmn-btn" href="/online-order">Order Now</a><a
                        class="banner-btn-two" href="/contact">Get Free Call</a></div>
            </div>
            <div class="banner-img"><img src="{{ url('public/assets/landing/img/home-two/banner/banner-main.png') }}" alt="Banner"></div>
        </div>
    </div>

      
    </main>

@endsection
