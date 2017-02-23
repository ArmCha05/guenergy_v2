<?php echo $header; ?>

<section class="col-lg-<?php echo $SPAN[1];?> col-sm-<?php echo $SPAN[1];?> col-xs-12">
<?php if ($attention) { ?>
  <div class="alert alert-info"><i class="fa fa-info-circle"></i> <?php echo $attention; ?>
    <button type="button" class="close" data-dismiss="alert">&times;</button>
  </div>
  <?php } ?>
  <?php if ($success) { ?>
  <div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $success; ?>
    <button type="button" class="close" data-dismiss="alert">&times;</button>
  </div>
  <?php } ?>
  <?php if ($error_warning) { ?>
  <div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?>
    <button type="button" class="close" data-dismiss="alert">&times;</button>
  </div>
  <?php } ?>


<div id="content" class="paddingCartTittle" >

  <div class="cart-header" >

    <a href="<?php echo $continue; ?>">
      <span class="btn btn--secondary" > 
        Seguir comprando
      </span>
    </a>
      <h1 class="small--text-center">Carrito de compras</h1>

    <div class="clear"></div>
  </div>


  <div >
  
  <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">

    <div class="cart-info">
      <table class="table table-hover">
        
        <tbody>
          <?php foreach ($products as $product) { ?>
            <tr>
              <td class="col-md-2 " >
                <a href="<?php echo $product['href']; ?>" class="imagenCart">
                  <img src="<?php echo $product['thumb']; ?>" alt="<?php echo $product['name']; ?>">
                </a>
              </td>

              <td class="col-md-4">
                <a href="<?php echo $product['href']; ?>" class="h5">
                  <?php echo $product['name']; ?>
                </a>
                <?php foreach ($product['option'] as $option) { ?>
                  <p><?php echo $option['name']; ?> / <?php echo $option['value']; ?></p><br />
                <?php } ?>          
              </td>

              <td class="col-md-1">
                <label for="Updates_12137376449" class="cart__quantity-label medium-up--hide">
                  
                </label>

                <input type="number" name="quantity[<?php echo $product['cart_id']; ?>]" id="Updates_12137376449" class="cart__quantity" value="<?php echo $product['quantity']; ?>" min="0" data-line="1" >
              </td>

              <td class="col-md-2">
                <button type="submit" data-toggle="tooltip" title="<?php echo $button_update; ?>" class="btn btn-primary"><i class="fa fa-refresh"></i></button>
              &nbsp;
                <!--<button type="button" data-toggle="tooltip" title="<?php echo $button_remove; ?>" class="btn btn-danger" onclick="cart.remove('<?php echo $product['cart_id']; ?>');"><i class="fa fa-times-circle"></i></button>-->
              </td>


              <td class="col-md-1">
                <span class="cart__item-total">
                  <?php echo $product['total']; ?>
                </span>
              </td>
              
            </tr>

          <?php } ?>
          
        </tbody>
      </table>
      <hr>
    </div>
  </form>

  <div class="grid cart__row">
      
    <div class="grid__item cart__buttons text-right small--text-center">
      <?php foreach ($totals as $total) { ?>
        <p class="h3 cart__subtotal" id="CartSubtotal">
          <?php echo $total['title']; ?>:<?php echo $total['text']; ?>  
        </p>
      
      <?php } ?>
      


      <p class="cart__taxes" ><strong>Fecha estimada de entrega : <?php echo strftime("%b/%d/%Y"); ?><span id="js-ship-date"></span></strong><br />Todas las ordenes requieren 48 horas para ser procesadas. <br /> Si tu orden es urgente, porfavor contactáctanos al equipo de Servicio al Cliente (1-800-400-1995, option 4)</p>
      <div class="clear"></div>
      
      <a href="<?php echo $checkout; ?>">
        <input type="submit" name="checkout" class="btn" value="<?php echo $button_checkout; ?>">
      </a>
    </div>
  </div>
  

   
  </div>
  </div>
<script type="text/javascript"><!--
$('input[name=\'next\']').bind('change', function() {
  $('.cart-module > div').hide();
  
  $('#' + this.value).show();
});
//--></script>

</section> 
<?php echo $footer; ?>
