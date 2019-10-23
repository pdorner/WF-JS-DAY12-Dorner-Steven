

    
  
    $(".cat-1").parentsUntil(".col-md-6").css("background", "red");
    $(".cat-2").parentsUntil(".col-md-6").css("background", "green");
    $(".cat-3").parentsUntil(".col-md-6").css("background", "blue   ");
    $(".description").css("background" , "initial");

    $(".container").append(`<div class="col-xs-12 col-md-6">
    <!-- First product box start here-->
    <div class="prod-info-main prod-wrap clearfix">
        <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12"> 
                <div class="product-image"> 
                    <img src="notebook_apple.png" class="img-responsive"> 
                    <span class="tag2 hot">
                        HOT
                    </span> 
                </div>
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12">
                <div class="product-deatil">
                    <h5 class="name">
                        <a href="#">
                            MacBook
                        </a>
                        <a href="#">
                            <span class="cat-1">Notebook</span>
                        </a>                            

                    </h5>
                    <p class="price-container">
                        <span>$199</span>
                    </p>
                    <span class="tag1"></span> 
                </div>
                <div class="description">
                    <p>A Short product description here </p>
                </div>
                <div class="product-info smart-form">
                    <div class="row">
                        <div class="col-md-12"> 
                            <a href="javascript:void(0);" class="btn btn-danger">Add to cart</a>
                            <a href="javascript:void(0);" class="btn btn-info">More info</a>
                        </div>
                        <div class="col-md-12">
                            <div class="rating">Rating:
                                <label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
                                <label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
                                <label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
                                <label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
                                <label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end product -->
</div>
<div class="col-xs-12 col-md-6">
			<!-- First product box start here-->
			<div class="prod-info-main prod-wrap clearfix">
				<div class="row">
					<div class="col-md-5 col-sm-12 col-xs-12">
						<div class="product-image"> 
							<img src="phone_iphone.png" alt="194x228" class="img-responsive"> 
							<span class="tag3 special">
								Special
							</span> 
						</div>
					</div>
					<div class="col-md-7 col-sm-12 col-xs-12">
						<div class="product-deatil">
							<h5 class="name">
								<a href="#">
									iPhone 7 <span class="cat-2">Mobile</span>
								</a>
							</h5>
							<p class="price-container">
								<span>$299</span>
							</p>
							<span class="tag1"></span> 
						</div>
						<div class="description">
							<p>A Short product description here </p>
						</div>
						<div class="product-info smart-form">
							<div class="row">
								<div class="col-md-12"> 
									<a href="javascript:void(0);" class="btn btn-danger">Add to cart</a>
									<a href="javascript:void(0);" class="btn btn-info">More info</a>
								</div>
								<div class="col-md-12">
									<div class="rating">Rating:
										<label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
										<label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end product -->
		</div>`)
;

 
$(".cat-1").parentsUntil(".col-md-6").css("background", "red");
$(".cat-2").parentsUntil(".col-md-6").css("background", "green");
$(".cat-3").parentsUntil(".col-md-6").css("background", "blue   ");
$(".description").css("background" , "initial");
$("#option1").on(`click`,function(){
    $(".cat-1").parentsUntil(".col-md-6").css("display", "block");
    $(".cat-2").parentsUntil(".col-md-6").css("display", "none");
    $(".cat-3").parentsUntil(".col-md-6").css("display", "none");
})

$("#option2").on(`click`,function(){
    $(".cat-1").parentsUntil(".col-md-6").css("display", "none");
    $(".cat-2").parentsUntil(".col-md-6").css("display", "block");
    $(".cat-3").parentsUntil(".col-md-6").css("display", "none");
})
$("#option3").on(`click`,function(){
    $(".cat-1").parentsUntil(".col-md-6").css("display", "none");
    $(".cat-2").parentsUntil(".col-md-6").css("display", "none");
    $(".cat-3").parentsUntil(".col-md-6").css("display", "block");
})
$("#option4").on(`click`,function(){
    $(".cat-1").parentsUntil(".col-md-6").css("display", "block");
    $(".cat-2").parentsUntil(".col-md-6").css("display", "block");
    $(".cat-3").parentsUntil(".col-md-6").css("display", "block ");
})
    
    
 