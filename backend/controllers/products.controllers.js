import Product from "../models/products.js";
// products
export const GetProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};

export const CreateProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};
// employee/:id = params
export const UpdateProduct = async (req, res) => {
  try {
    const UpdateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.send(UpdateProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const ProductRemoved = await Product.findByIdAndDelete(req.params.id);
    if (!ProductRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};

export const GetProduct = async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);
    if (!Product) return res.sendStatus(404);
    return res.json(Product);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};
