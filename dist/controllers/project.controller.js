"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = getProjects;
exports.getOneProject = getOneProject;
exports.deleteProject = deleteProject;
exports.createProject = createProject;
exports.updateProject = updateProject;

var _Projects = _interopRequireDefault(require("../models/Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// funciones útiles para administrar proyectos
function getProjects(_x, _x2) {
  return _getProjects.apply(this, arguments);
}

function _getProjects() {
  _getProjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Projects["default"].findAll();

          case 3:
            projects = _context.sent;
            // consultamos todos los proyectos
            res.json({
              data: projects
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getProjects.apply(this, arguments);
}

function getOneProject(_x3, _x4) {
  return _getOneProject.apply(this, arguments);
}

function _getOneProject() {
  _getOneProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _Projects["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            project = _context2.sent;
            res.json({
              data: project
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneProject.apply(this, arguments);
}

function deleteProject(_x5, _x6) {
  return _deleteProject.apply(this, arguments);
}

function _deleteProject() {
  _deleteProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Projects["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: "Project deleted succesfully",
              count: deleteRowCount
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _deleteProject.apply(this, arguments);
}

function createProject(_x7, _x8) {
  return _createProject.apply(this, arguments);
}

function _createProject() {
  _createProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, priority, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // console.log(req.body);
            // res.send("Received...");
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate; //datos que me envia el cliente

            _context4.prev = 1;
            _context4.next = 4;
            return _Projects["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              // se especifican las columnas a las cuales les voy a enviar datos
              fields: ['name', 'priority', 'description', 'deliverydate']
            });

          case 4:
            newProject = _context4.sent;

            if (newProject) {
              // si el proyecto se creo correctamente
              console.log(newProject);
              res.json({
                message: "Project created sucessfully",
                data: newProject
              });
            }

            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _createProject.apply(this, arguments);
}

function updateProject(_x9, _x10) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, priority, description, deliverydate, projects;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.prev = 2;
            _context6.next = 5;
            return _Projects["default"].findAll({
              attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
              where: {
                id: id
              }
            });

          case 5:
            projects = _context6.sent;

            // si el proyecto existe lo actualizamos
            if (projects.length > 0) {
              projects.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(project) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return project.update({
                            name: name,
                            priority: priority,
                            description: description,
                            deliverydate: deliverydate
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            } // respuesta al cliente


            res.json({
              message: "Project updated succesfully",
              data: projects
            });
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateProject.apply(this, arguments);
}