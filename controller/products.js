const { productModel } = require('../model/products.js');

async function productPost(req, res) {
    const { productName, productDesc, productPrice, productImage } = req.body;
    await productModel.create({
        productName,
        productDesc,
        productPrice,
        productImage
    });
    return res.redirect('/products');
};

async function getProduct(req, res) {
    console.log('asdfajsdfjdjah');
    try {
      if(!req.user) return res.redirect('/login');
      const productData = await productModel.find(); 
      console.log(productData)
      return res.render('products', { product: productData });
    } catch (err) {
      console.error('Error fetching product data:', err);
      return res.status(500).send('Internal Server Error');
    }
  };

module.exports = {
    productPost,
    getProduct,
}
