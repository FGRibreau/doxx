"use strict";
const Match_1 = require("../utils/Match");
class CharacterStream {
    constructor(source, location) {
        this.stream = [];
        this._position = 0;
        this._line = 1;
        this._column = 0;
        this.source(source, location);
    }
    // [Symbol.iterator]() { return this.stream.values(); }
    mark(c, next) {
        if (Match_1.default.isLineTerminator(c)) {
            this._line = next ? this._line + 1 : this._line - 1;
            this._column = 1;
        }
        else {
            this._column++;
        }
        return c;
    }
    current() { return this.stream[this._position]; }
    next() { return this.mark(this.stream[this._position++], true); }
    previous() { return this.mark(this.stream[this._position--], false); }
    peek(to) { return this.stream[this._position + to]; }
    source(source, location) {
        (this.stream = source ? source.split('') : this.stream).push('\u{0000}');
        if (location) {
            this._position = location.position;
            this._column = location.column;
            this._line = location.line;
        }
        else {
            this._position = this._column = 0;
            this._line = 1;
        }
    }
    get ended() { return this._position === this.stream.length; }
    set location(location) {
        this._position = location.position;
        this._line = location.line;
        this._column = location.column;
    }
    get position() { return this._position; }
    get line() { return this._line; }
    get column() { return this._column; }
    get length() { return this.stream.length; }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CharacterStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmFjdGVyU3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBbUM7QUFJbkM7SUFNRSxZQUFZLE1BQWUsRUFBRSxRQUFtQjtRQUx4QyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCx1REFBdUQ7SUFDL0MsSUFBSSxDQUFDLENBQVMsRUFBRSxJQUFhO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLGVBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELE9BQU8sS0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELElBQUksS0FBYSxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxRQUFRLEtBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsSUFBSSxDQUFDLEVBQVUsSUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxNQUFNLENBQUMsTUFBYyxFQUFFLFFBQW1CO1FBQ3hDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxLQUFLLEtBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLElBQUksUUFBUSxDQUFDLFFBQWtCO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLFFBQVEsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQzVDOztBQTFDRCxrQ0EwQ0MifQ==