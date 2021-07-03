const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        {model: Product}
      ]
    })
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = req.params.id
    const tagData = await Tag.findByPk(tag, {
      include: [
        {model: Product}
      ]
    })
    if (!tagData) {
      res.status(404)
      res.send("No such tag exists")
      return;
    }
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tagName
    });
    res.json(tagData);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tagName,
    }, 
    {
      where: {
        id: req.params.id
      }
    })
    res.status(204)
    res.send("successfully updated.")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204)
    res.send("tag deleted")
  } catch (error) {
    res.status(500)
    res.send(error.message);
  }
});

module.exports = router;
