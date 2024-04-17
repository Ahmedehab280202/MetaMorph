"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradientPaint = void 0;
class GradientPaint {
    constructor(type, gradientTransform, gradientStops) {
        this.type = type;
        this.gradientTransform = gradientTransform;
        this.gradientStops = gradientStops;
    }
}
exports.GradientPaint = GradientPaint;
