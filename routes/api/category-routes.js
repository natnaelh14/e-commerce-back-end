const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories, Be sure to include its associated Products
  try {
    const categoryAllData = Category.findAll({include: [Product]})
    res.status(200).json(categoryAllData)
  } catch (e) {
    res.status(500).json(e)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value, Be sure to include its associated Products
  try {
    const categoryOneData = Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.status(200).json(categoryOneData)
  } catch (e) {
    res.status(400).json(e)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryPostData = Category.create(req.body)
    res.status(200).json(categoryPostData)
  } catch (e) {
    res.status(400).json(e)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdateData = Category.update(req.body, {
      where: {
        id: req.params.id
      } 
    })
    res.status(200).json(categoryUpdateData)
  } catch (e) {
    res.status(400).json(e)
  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDeleteData = Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(categoryDeleteData)
  } catch (e) {
    res.status(400).json(e)
  }

});

module.exports = router;
