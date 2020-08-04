"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mustache = __importStar(require("mustache"));
var Tasks = /** @class */ (function () {
    function Tasks() {
        this._idCount = 0;
        this._tasks = [];
        this._uiInteractor = new Tasks_UIInteraction();
    }
    Tasks.prototype.push = function (task) {
        this._tasks.push(task);
        this._uiInteractor.push(task);
    };
    Tasks.prototype.getNewId = function () {
        return this._idCount++;
    };
    return Tasks;
}());
var Tasks_UIInteraction = /** @class */ (function () {
    function Tasks_UIInteraction() {
    }
    Tasks_UIInteraction.prototype.push = function (task) {
        var template = document.getElementById("template-task-item").innerHTML;
        mustache.parse(template);
        var rendered = mustache.render(template, task);
        document.getElementById("taskList").innerHTML += rendered;
        document.getElementById('inputTask').value = '';
        this.addAmountToBadge(1);
        var tasks = document.getElementsByClassName("list-group-item");
        var markAsDoneButtons = document.getElementsByClassName('markTaskAsDone');
        var removeTaskButtons = document.getElementsByClassName('removeTask');
        for (var i = 0; i < markAsDoneButtons.length; i++) {
            var currentElement = markAsDoneButtons[i];
            currentElement.addEventListener("click", this.handleMarkAsDoneClick.bind(this));
        }
        for (var i = 0; i < removeTaskButtons.length; i++) {
            var currentElement = removeTaskButtons[i];
            currentElement.addEventListener("click", this.handleRemoveTaskClick.bind(this));
        }
    };
    Tasks_UIInteraction.prototype.addAmountToBadge = function (amount) {
        var currentValueTaskBadge = Number(document.getElementById('yourTasksBadge').innerHTML);
        document.getElementById('yourTasksBadge').innerHTML = (currentValueTaskBadge + amount).toString();
    };
    Tasks_UIInteraction.prototype.handleMarkAsDoneClick = function (event) {
        var target = event.currentTarget;
        var element = target;
        var row = element.parentElement.parentElement;
        if (!row.classList.contains('task-done')) {
            row.classList.add('task-done');
            this.addAmountToBadge(-1);
        }
    };
    Tasks_UIInteraction.prototype.handleRemoveTaskClick = function (event) {
        var target = event.currentTarget;
        var element = target;
        var row = element.parentElement.parentElement;
        if (!row.classList.contains('task-done')) {
            this.addAmountToBadge(-1);
        }
        row.remove();
    };
    return Tasks_UIInteraction;
}());
var tasks = new Tasks();
document.getElementById("addTask").addEventListener("click", handleAddTaskClick);
function handleAddTaskClick() {
    var inputTask = document.getElementById("InputTask");
    var inputTaskValue = inputTask.value;
    if (inputTaskValue === "") {
        return;
    }
    var id = tasks.getNewId();
    var task = {
        id: id,
        descripcion: inputTaskValue,
        done: false
    };
    tasks.push(task);
}
