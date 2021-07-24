const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories, Be sure to include its associated Products
  try {
    const categoryAllData = await Category.findAll({include: [Product]})
    res.status(200).json(categoryAllData)
  } catch (e) {
    res.status(500).json(e)
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value, Be sure to include its associated Products
  try {
    const categoryOneData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.status(200).json(categoryOneData)
  } catch (e) {
    res.status(404).json(e)
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const categoryPostData = await Category.create(req.body)
    res.status(200).json(categoryPostData)
  } catch (e) {
    res.status(404).json(e)
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdateData = await Category.update(req.body, {
      where: {
        id: req.params.id
      } 
    })
    res.status(200).json(categoryUpdateData)
  } catch (e) {
    res.status(404).json(e)
  }

});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDeleteData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryDeleteData)
  } catch (e) {
    res.status(404).json(e)
  }

});

module.exports = router;
