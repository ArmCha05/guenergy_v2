
<?php echo $header; ?>

<div class="pagehero">
	<div class="hero-bg js-doc-nav-wrapper" style="background-image: url('catalog/view/theme/default/images/atletas.jpg')" >
	</div>

	<div class="copy">
		<p class="distance-title">
			GU ENERGY
		</p>

		<h1 itemprop="headline" class="entry-title">
			ATLETAS
		</h1>

		<p itemprop="sub-title" class="sub-title">
			Nuestros atletas....
		</p>

	</div>

</div>
<hr>


<div class="container">
        <div class="row">
          <div class="col-sm-12"> 
                
            <div class="row">
              <div class="js-plan-types-list">
                <?php if ($articles) { ?>

                  <?php foreach ($articles as $article) { ?>
                    <div class="post-item -nutrition-plan mb2 filter-event-plan filter-running">

                      <?php echo $article['intro_text']; ?>
                      <!--<div class="panel panel-default">
                          <div class="panel-body">
                            <div class="article-layout article-list col-xs-12">
                              <div class="article-intro">
                                <div>
                                    <h3><a href="<?php echo $article['href']; ?>"><?php echo $article['name']; ?></a></h3>
                                    <p><?php echo $article['date_modified']; ?></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>-->
                        <!--<?php echo $article['meta_data']; ?>-->
                        <a class="btn -clear" href="<?php echo $article['href']; ?>" >
                          Aprender más
                          <i class="tmbricons tmbricons-arrow-right"></i>
                        </a>
                    </div>

                            
                          
                  <?php } ?>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div class="row">
        <div class="col-sm-6 text-left"><?php echo $pagination; ?></div>
        <div class="col-sm-6 text-right"><?php echo $results; ?></div>
      </div>
      <?php } ?>
      <?php if (!$articles) { ?>
      <p><?php echo $text_empty; ?></p>
      <?php } ?>
      </div>


<?php echo $footer; ?>