const gameModel = require('../model/Game')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

exports.insertGame = (data) =>
  new Promise((resolve, reject) => {
    gameModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input Game')))
    .catch(() => reject(requestResponse.serverError))
  })

exports.getAllGame = () =>
  new Promise((resolve, reject) => {
    gameModel.find({})
     .then(game => resolve(requestResponse.suksesWithData(game)))
     .catch(error => reject(requestResponse.serverError))
  })

exports.getById = (id) =>
  new Promise((resolve, reject) => {
    gameModel.findOne({
      _id: objectId(id)
    }).then(game => resolve(requestResponse.suksesWithData(game)))
    .catch(error => reject(requestResponse.serverError))
  })

exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    gameModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Data'))
      }).catch(() => reject(requestResponse.serverError))
  })

exports.delete = (id) =>
  new Promise((resolve, reject) =>{
    gameModel.findOne({
      _id: objectId(id)
    }).then(game => {
      gameModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(game.image)
        resolve(requestResponse.sukses('Berhasil Delete Game'))
      }).catch(() => reject(requestResponse.serverError))
    })
  })