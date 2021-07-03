const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: {model: Product},
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500)
    res.send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = req.params.id
    const categoryData = await Category.findByPk(categoryId, {
      include: {model: Product},
    });

    if (!categoryData) {
      res.status(404)
      res.send("No such category exists");
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryId = req.params.id
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: categoryId,
        },
      }
    );
    res.status(204).json(categoryData);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryId = req.params.id
    const categoryData = await Category.destroy({
      where: {
        id: categoryId,
      },
    });
    res.status(204)
    res.send("category deleted.")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

module.exports = router;
