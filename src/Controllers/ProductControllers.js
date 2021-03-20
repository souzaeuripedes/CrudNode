const mongoose = require ('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  //lista todos os itens
  async index(req, res){
    //add um get paramater, para podermos usar ?page=1 na mudar as paginas 
    const {page = 1} = req.query;
    //limita para 10 o número de resultados por pagina 
    //p/ isso foi preciso instalar o mongoose-paginate
    const products = await Product.paginate({}, { page , limit:10});

    return res.json({products});
  },

  //lista apenas um item pelo id
  async show(req, res){
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

   //criar o produto 
   async store (req, res){
    const product = await Product.create(req.body);

    return res.json(product);
  },

  //update produto
  async update(req, res){
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    //new retorna o produto atualizado
    return res.json(product);
  },

  //deletar produto
  async destroy(req, res){
    await Product.findByIdAndDelete(req.params.id);

    return res.send();
  }


  

}