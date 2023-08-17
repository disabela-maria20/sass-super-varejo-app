var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
export function Colunistas() {
    var _this = this;
    var modals = {};
    var GetColunistas = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4, fetch("/assets/json/colunistas.json")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return [4, response.json()];
                case 2:
                    data = _a.sent();
                    PutOnGrid(data);
                    return [3, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching colunistas:", error_1);
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); };
    GetColunistas();
    var PutOnGrid = function (data) {
        var columnists_grid = document.querySelector(".columnists_grid");
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cols = data_1[_i];
            PutModal(cols);
            columnists_grid.innerHTML += "\n        <div class=\"media container_area\">\n          <div class=\"container_img\">\n            <img src=\"./assets/images/square.png\" class=\"mr-3\" alt=\"...\">\n          </div>\n          <div class=\"media-body\">\n            <h5 class=\"mt-0\">".concat(cols.name, "</h5>\n            <p>").concat(cols.textMin, " <a data-toggle=\"modal\" data-target=\"#ModalLong-").concat(cols.id, "\">leia mais</a></p>\n          </div>\n        </div>\n      ");
            modals[cols.id] = cols;
        }
    };
    var PutModal = function (cols) {
        console.log(modals);
        var area_modal = document.querySelector(".area_modal");
        area_modal.innerHTML += "\n    <div class=\"modal fade\" id=\"ModalLong-".concat(cols.id, "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-").concat(cols.id, "\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"modal-").concat(cols.id, "\">").concat(cols.name, "</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">").concat(cols.textModal, "</div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\" btn-modal\" data-dismiss=\"modal\">Fechar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    ");
    };
}
