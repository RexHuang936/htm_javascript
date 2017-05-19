/*
 * To better mimic class Deque
 */

var LinkedBlockingDeque = function() {
    this.l = [];
};

LinkedBlockingDeque.prototype = {
    addFirst: function(el) {
        this.l.splice(0, 0, el);
    },

    addLast: function(el) {
        this.l.push(el);
    },

    removeFirst: function() {
        return this.l.shift();
    },

    removeLast: function() {
        return this.l.pop();
    },

    takeFirst: function() {
        return this.l.shift();
    },

    takeLast: function() {
        return this.l.pop();
    },

    peekFirst: function() {
        if (this.l.length === 0) {
            return null;
        }
        return this.l[0];
    },

    peekLast: function() {
        if (this.l.length === 0) {
            return null;
        }
        return this.l[this.length - 1];
    },

    clear: function() {
        this.l.length = 0;
        this.l = [];
    },

    iterator: function() {
        return this.l[Symbol.iterator]();
    },

    hashCode: function() {
        return HashCode.value(this);
    },

    toArray: function() {
        return this.l;
    },

    toString: function() {
        return this.l.toString();
    }
};

