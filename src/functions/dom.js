(function(){
    return {
        /**
         * 获取dom的样式值，或为dom的某个样式赋值
         *
         * @param {*} dom
         * @param {*} key
         * @param {*} [val]
         * @returns
         */
        fnStyle(dom, key, val?) {
            if (!dom) return;
            if (val) {
                dom.style[key] = val;
            } else {
                if (dom.currentStyle) {
                    var _key = key == "float" ? "styleFloat" : key;
                    return dom.currentStyle[_key.replace(/(-\w)/g, function (match) {
                        return match[1].toUpperCase();
                    })];
                } else {
                    return document.defaultView.getComputedStyle(dom, null)[key];
                }
            }
        },
        /**
         * 更改dom元素的宽度
         *
         * @param {*} w
         * @param {*} m
         * @returns
         */
        fnPx(w, m){
            return (parseInt(w.replace(/px/, "")) + m) + "px"
        },

        /**
         * 获取元素距离可视区域的左边距
         *
         * @param {*} elem
         * @returns
         */
        getElemDistance(elem) {
            var location = 0;
            if (elem.offsetParent) {
                do {
                    location += elem.offsetLeft;
                    elem = elem.offsetParent;
                } while (elem);
            }
            return location >= 0 ? location : 0;
        },
        /**
         * 获取元素距离可视区域的左上边距
         *
         * @param {*} el
         * @returns
         */
        getPageTopLeft(el) {
            var rect = el.getBoundingClientRect();
            var docEl = document.documentElement;
            return {
                left: rect.left + (window.pageXOffset || docEl.scrollLeft || 0),
                top: rect.top + (window.pageYOffset || docEl.scrollTop || 0)
            };
        },
    }
})();