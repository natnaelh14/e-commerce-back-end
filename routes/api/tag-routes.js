const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags, Be sure to include its associated Product data
  try {
    const tagAllData = Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        }
      ]
    })
    res.status(200).json(tagAllData)
  } catch (e) {
    res.status(500).json(e)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id, Be sure to include its associated Product data
  try {
    const tagOneData = Tag.findOne({where: {id: req.params.id}})
    res.status(200).json(tagOneData)
  } catch (e) {
    res.status(404).json(e)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tagPostData = Tag.create(req.body)
    res.status(200).json(tagPostData)
  } catch (e) {
    res.status(404).json(e)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdateData = Tag.update(req.body, {where: {id: req.params.id}})
    res.status(200).json(tagUpdateData)
  } catch (e) {
    res.status(404).json(e)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDeleteData = Tag.destroy({where: {id: req.params.id}})
    res.status(200).json(tagDeleteData)
  } catch (e) {
    res.status(404).json(e)
  }
});

module.exports = router;
