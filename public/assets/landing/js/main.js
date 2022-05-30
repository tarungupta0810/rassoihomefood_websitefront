"use strict";
var d5 = Object.defineProperty,
    f5 = Object.defineProperties,
    h5 = Object.getOwnPropertyDescriptors,
    Xb = Object.getOwnPropertySymbols,
    p5 = Object.prototype.hasOwnProperty,
    g5 = Object.prototype.propertyIsEnumerable,
    e0 = (Ue, Ve, ge) => Ve in Ue ? d5(Ue, Ve, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ge
    }) : Ue[Ve] = ge,
    L = (Ue, Ve) => {
        for (var ge in Ve || (Ve = {})) p5.call(Ve, ge) && e0(Ue, ge, Ve[ge]);
        if (Xb)
            for (var ge of Xb(Ve)) g5.call(Ve, ge) && e0(Ue, ge, Ve[ge]);
        return Ue
    },
    gt = (Ue, Ve) => f5(Ue, h5(Ve));
(self.webpackChunkspiz_ng = self.webpackChunkspiz_ng || []).push([
    [179], {
        919: () => {
            function Ue(e) {
                return "function" == typeof e
            }
            let Ve = !1;
            const ge = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(e) {
                    if (e) {
                        const t = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                    } else Ve && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    Ve = e
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return Ve
                }
            };

            function Fn(e) {
                setTimeout(() => {
                    throw e
                }, 0)
            }
            const rs = {
                    closed: !0,
                    next(e) {},
                    error(e) {
                        if (ge.useDeprecatedSynchronousErrorHandling) throw e;
                        Fn(e)
                    },
                    complete() {}
                },
                Df = Array.isArray || (e => e && "number" == typeof e.length);

            function Ef(e) {
                return null !== e && "object" == typeof e
            }
            const is = (() => {
                function e(t) {
                    return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((n,r)=>`${r+1}) ${n.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();
            class ye {
                constructor(t) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                unsubscribe() {
                    let t;
                    if (this.closed) return;
                    let {
                        _parentOrParents: n,
                        _unsubscribe: r,
                        _subscriptions: i
                    } = this;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof ye) n.remove(this);
                    else if (null !== n)
                        for (let a = 0; a < n.length; ++a) n[a].remove(this);
                    if (Ue(r)) try {
                        r.call(this)
                    } catch (a) {
                        t = a instanceof is ? If(a.errors) : [a]
                    }
                    if (Df(i)) {
                        let a = -1,
                            l = i.length;
                        for (; ++a < l;) {
                            const u = i[a];
                            if (Ef(u)) try {
                                u.unsubscribe()
                            } catch (c) {
                                t = t || [], c instanceof is ? t = t.concat(If(c.errors)) : t.push(c)
                            }
                        }
                    }
                    if (t) throw new is(t)
                }
                add(t) {
                    let n = t;
                    if (!t) return ye.EMPTY;
                    switch (typeof t) {
                        case "function":
                            n = new ye(t);
                        case "object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if (!(n instanceof ye)) {
                                const a = n;
                                n = new ye, n._subscriptions = [a]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + t + " added to Subscription.")
                    }
                    let {
                        _parentOrParents: r
                    } = n;
                    if (null === r) n._parentOrParents = this;
                    else if (r instanceof ye) {
                        if (r === this) return n;
                        n._parentOrParents = [r, this]
                    } else {
                        if (-1 !== r.indexOf(this)) return n;
                        r.push(this)
                    }
                    const i = this._subscriptions;
                    return null === i ? this._subscriptions = [n] : i.push(n), n
                }
                remove(t) {
                    const n = this._subscriptions;
                    if (n) {
                        const r = n.indexOf(t); - 1 !== r && n.splice(r, 1)
                    }
                }
            }
            var e;

            function If(e) {
                return e.reduce((t, n) => t.concat(n instanceof is ? n.errors : n), [])
            }
            ye.EMPTY = ((e = new ye).closed = !0, e);
            const os = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
            class De extends ye {
                constructor(t, n, r) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = rs;
                            break;
                        case 1:
                            if (!t) {
                                this.destination = rs;
                                break
                            }
                            if ("object" == typeof t) {
                                t instanceof De ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new Af(this, t));
                                break
                            }
                            default:
                                this.syncErrorThrowable = !0, this.destination = new Af(this, t, n, r)
                    }
                } [os]() {
                    return this
                }
                static create(t, n, r) {
                    const i = new De(t, n, r);
                    return i.syncErrorThrowable = !1, i
                }
                next(t) {
                    this.isStopped || this._next(t)
                }
                error(t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(t) {
                    this.destination.next(t)
                }
                _error(t) {
                    this.destination.error(t), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: t
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                }
            }
            class Af extends De {
                constructor(t, n, r, i) {
                    super(), this._parentSubscriber = t;
                    let a, l = this;
                    Ue(n) ? a = n : n && (a = n.next, r = n.error, i = n.complete, n !== rs && (l = Object.create(n), Ue(l.unsubscribe) && this.add(l.unsubscribe.bind(l)), l.unsubscribe = this.unsubscribe.bind(this))), this._context = l, this._next = a, this._error = r, this._complete = i
                }
                next(t) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: n
                        } = this;
                        ge.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }
                error(t) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: n
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: r
                        } = ge;
                        if (this._error) r && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                        else if (n.syncErrorThrowable) r ? (n.syncErrorValue = t, n.syncErrorThrown = !0) : Fn(t), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), r) throw t;
                            Fn(t)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: t
                        } = this;
                        if (this._complete) {
                            const n = () => this._complete.call(this._context);
                            ge.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(t, n) {
                    try {
                        t.call(this._context, n)
                    } catch (r) {
                        if (this.unsubscribe(), ge.useDeprecatedSynchronousErrorHandling) throw r;
                        Fn(r)
                    }
                }
                __tryOrSetError(t, n, r) {
                    if (!ge.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        n.call(this._context, r)
                    } catch (i) {
                        return ge.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = i, t.syncErrorThrown = !0, !0) : (Fn(i), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: t
                    } = this;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }
            }
            const Ni = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function ss(e) {
                return e
            }
            let be = (() => {
                class e {
                    constructor(n) {
                        this._isScalar = !1, n && (this._subscribe = n)
                    }
                    lift(n) {
                        const r = new e;
                        return r.source = this, r.operator = n, r
                    }
                    subscribe(n, r, i) {
                        const {
                            operator: a
                        } = this, l = function (e, t, n) {
                            if (e) {
                                if (e instanceof De) return e;
                                if (e[os]) return e[os]()
                            }
                            return e || t || n ? new De(e, t, n) : new De(rs)
                        }(n, r, i);
                        if (l.add(a ? a.call(l, this.source) : this.source || ge.useDeprecatedSynchronousErrorHandling && !l.syncErrorThrowable ? this._subscribe(l) : this._trySubscribe(l)), ge.useDeprecatedSynchronousErrorHandling && l.syncErrorThrowable && (l.syncErrorThrowable = !1, l.syncErrorThrown)) throw l.syncErrorValue;
                        return l
                    }
                    _trySubscribe(n) {
                        try {
                            return this._subscribe(n)
                        } catch (r) {
                            ge.useDeprecatedSynchronousErrorHandling && (n.syncErrorThrown = !0, n.syncErrorValue = r),
                                function (e) {
                                    for (; e;) {
                                        const {
                                            closed: t,
                                            destination: n,
                                            isStopped: r
                                        } = e;
                                        if (t || r) return !1;
                                        e = n && n instanceof De ? n : null
                                    }
                                    return !0
                                }(n) ? n.error(r) : console.warn(r)
                        }
                    }
                    forEach(n, r) {
                        return new(r = Sf(r))((i, a) => {
                            let l;
                            l = this.subscribe(u => {
                                try {
                                    n(u)
                                } catch (c) {
                                    a(c), l && l.unsubscribe()
                                }
                            }, a, i)
                        })
                    }
                    _subscribe(n) {
                        const {
                            source: r
                        } = this;
                        return r && r.subscribe(n)
                    } [Ni]() {
                        return this
                    }
                    pipe(...n) {
                        return 0 === n.length ? this : function (e) {
                            return 0 === e.length ? ss : 1 === e.length ? e[0] : function (n) {
                                return e.reduce((r, i) => i(r), n)
                            }
                        }(n)(this)
                    }
                    toPromise(n) {
                        return new(n = Sf(n))((r, i) => {
                            let a;
                            this.subscribe(l => a = l, l => i(l), () => r(a))
                        })
                    }
                }
                return e.create = t => new e(t), e
            })();

            function Sf(e) {
                if (e || (e = ge.Promise || Promise), !e) throw new Error("no Promise impl found");
                return e
            }
            const Sr = (() => {
                function e() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();
            class r0 extends ye {
                constructor(t, n) {
                    super(), this.subject = t, this.subscriber = n, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const t = this.subject,
                        n = t.observers;
                    if (this.subject = null, !n || 0 === n.length || t.isStopped || t.closed) return;
                    const r = n.indexOf(this.subscriber); - 1 !== r && n.splice(r, 1)
                }
            }
            class Tf extends De {
                constructor(t) {
                    super(t), this.destination = t
                }
            }
            let vn = (() => {
                class e extends be {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [os]() {
                        return new Tf(this)
                    }
                    lift(n) {
                        const r = new kf(this, this);
                        return r.operator = n, r
                    }
                    next(n) {
                        if (this.closed) throw new Sr;
                        if (!this.isStopped) {
                            const {
                                observers: r
                            } = this, i = r.length, a = r.slice();
                            for (let l = 0; l < i; l++) a[l].next(n)
                        }
                    }
                    error(n) {
                        if (this.closed) throw new Sr;
                        this.hasError = !0, this.thrownError = n, this.isStopped = !0;
                        const {
                            observers: r
                        } = this, i = r.length, a = r.slice();
                        for (let l = 0; l < i; l++) a[l].error(n);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new Sr;
                        this.isStopped = !0;
                        const {
                            observers: n
                        } = this, r = n.length, i = n.slice();
                        for (let a = 0; a < r; a++) i[a].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(n) {
                        if (this.closed) throw new Sr;
                        return super._trySubscribe(n)
                    }
                    _subscribe(n) {
                        if (this.closed) throw new Sr;
                        return this.hasError ? (n.error(this.thrownError), ye.EMPTY) : this.isStopped ? (n.complete(), ye.EMPTY) : (this.observers.push(n), new r0(this, n))
                    }
                    asObservable() {
                        const n = new be;
                        return n.source = this, n
                    }
                }
                return e.create = (t, n) => new kf(t, n), e
            })();
            class kf extends vn {
                constructor(t, n) {
                    super(), this.destination = t, this.source = n
                }
                next(t) {
                    const {
                        destination: n
                    } = this;
                    n && n.next && n.next(t)
                }
                error(t) {
                    const {
                        destination: n
                    } = this;
                    n && n.error && this.destination.error(t)
                }
                complete() {
                    const {
                        destination: t
                    } = this;
                    t && t.complete && this.destination.complete()
                }
                _subscribe(t) {
                    const {
                        source: n
                    } = this;
                    return n ? this.source.subscribe(t) : ye.EMPTY
                }
            }

            function as(e) {
                return e && "function" == typeof e.schedule
            }
            class ls extends De {
                constructor(t, n, r) {
                    super(), this.parent = t, this.outerValue = n, this.outerIndex = r, this.index = 0
                }
                _next(t) {
                    this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                }
                _error(t) {
                    this.parent.notifyError(t, this), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }
            const Mf = e => t => {
                    for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                    t.complete()
                },
                us = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
                Rf = e => e && "number" == typeof e.length && "function" != typeof e;

            function Ff(e) {
                return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
            }
            const Of = e => {
                if (e && "function" == typeof e[Ni]) return (e => t => {
                    const n = e[Ni]();
                    if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return n.subscribe(t)
                })(e);
                if (Rf(e)) return Mf(e);
                if (Ff(e)) return (e => t => (e.then(n => {
                    t.closed || (t.next(n), t.complete())
                }, n => t.error(n)).then(null, Fn), t))(e);
                if (e && "function" == typeof e[us]) return (e => t => {
                    const n = e[us]();
                    for (;;) {
                        const r = n.next();
                        if (r.done) {
                            t.complete();
                            break
                        }
                        if (t.next(r.value), t.closed) break
                    }
                    return "function" == typeof n.return && t.add(() => {
                        n.return && n.return()
                    }), t
                })(e); {
                    const n = `You provided ${Ef(e)?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
                    throw new TypeError(n)
                }
            };

            function cs(e, t, n, r, i = new ls(e, n, r)) {
                if (!i.closed) return t instanceof be ? t.subscribe(i) : Of(t)(i)
            }
            class ds extends De {
                notifyNext(t, n, r, i, a) {
                    this.destination.next(n)
                }
                notifyError(t, n) {
                    this.destination.error(t)
                }
                notifyComplete(t) {
                    this.destination.complete()
                }
            }

            function fe(e, t) {
                return function (r) {
                    if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return r.lift(new u0(e, t))
                }
            }
            class u0 {
                constructor(t, n) {
                    this.project = t, this.thisArg = n
                }
                call(t, n) {
                    return n.subscribe(new c0(t, this.project, this.thisArg))
                }
            }
            class c0 extends De {
                constructor(t, n, r) {
                    super(t), this.project = n, this.count = 0, this.thisArg = r || this
                }
                _next(t) {
                    let n;
                    try {
                        n = this.project.call(this.thisArg, t, this.count++)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this.destination.next(n)
                }
            }

            function hl(e, t) {
                return new be(n => {
                    const r = new ye;
                    let i = 0;
                    return r.add(t.schedule(function () {
                        i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete()
                    })), r
                })
            }

            function ut(e, t) {
                return t ? function (e, t) {
                    if (null != e) {
                        if (function (e) {
                                return e && "function" == typeof e[Ni]
                            }(e)) return function (e, t) {
                            return new be(n => {
                                const r = new ye;
                                return r.add(t.schedule(() => {
                                    const i = e[Ni]();
                                    r.add(i.subscribe({
                                        next(a) {
                                            r.add(t.schedule(() => n.next(a)))
                                        },
                                        error(a) {
                                            r.add(t.schedule(() => n.error(a)))
                                        },
                                        complete() {
                                            r.add(t.schedule(() => n.complete()))
                                        }
                                    }))
                                })), r
                            })
                        }(e, t);
                        if (Ff(e)) return function (e, t) {
                            return new be(n => {
                                const r = new ye;
                                return r.add(t.schedule(() => e.then(i => {
                                    r.add(t.schedule(() => {
                                        n.next(i), r.add(t.schedule(() => n.complete()))
                                    }))
                                }, i => {
                                    r.add(t.schedule(() => n.error(i)))
                                }))), r
                            })
                        }(e, t);
                        if (Rf(e)) return hl(e, t);
                        if (function (e) {
                                return e && "function" == typeof e[us]
                            }(e) || "string" == typeof e) return function (e, t) {
                            if (!e) throw new Error("Iterable cannot be null");
                            return new be(n => {
                                const r = new ye;
                                let i;
                                return r.add(() => {
                                    i && "function" == typeof i.return && i.return()
                                }), r.add(t.schedule(() => {
                                    i = e[us](), r.add(t.schedule(function () {
                                        if (n.closed) return;
                                        let a, l;
                                        try {
                                            const u = i.next();
                                            a = u.value, l = u.done
                                        } catch (u) {
                                            return void n.error(u)
                                        }
                                        l ? n.complete() : (n.next(a), this.schedule())
                                    }))
                                })), r
                            })
                        }(e, t)
                    }
                    throw new TypeError((null !== e && typeof e || e) + " is not observable")
                }(e, t) : e instanceof be ? e : new be(Of(e))
            }

            function $e(e, t, n = Number.POSITIVE_INFINITY) {
                return "function" == typeof t ? r => r.pipe($e((i, a) => ut(e(i, a)).pipe(fe((l, u) => t(i, l, a, u))), n)) : ("number" == typeof t && (n = t), r => r.lift(new v0(e, n)))
            }
            class v0 {
                constructor(t, n = Number.POSITIVE_INFINITY) {
                    this.project = t, this.concurrent = n
                }
                call(t, n) {
                    return n.subscribe(new y0(t, this.project, this.concurrent))
                }
            }
            class y0 extends ds {
                constructor(t, n, r = Number.POSITIVE_INFINITY) {
                    super(t), this.project = n, this.concurrent = r, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(t) {
                    this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                }
                _tryNext(t) {
                    let n;
                    const r = this.index++;
                    try {
                        n = this.project(t, r)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    this.active++, this._innerSub(n, t, r)
                }
                _innerSub(t, n, r) {
                    const i = new ls(this, n, r),
                        a = this.destination;
                    a.add(i);
                    const l = cs(this, t, void 0, void 0, i);
                    l !== i && a.add(l)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(t, n, r, i, a) {
                    this.destination.next(n)
                }
                notifyComplete(t) {
                    const n = this.buffer;
                    this.remove(t), this.active--, n.length > 0 ? this._next(n.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }

            function Li(e = Number.POSITIVE_INFINITY) {
                return $e(ss, e)
            }

            function pl(e, t) {
                return t ? hl(e, t) : new be(Mf(e))
            }

            function gl() {
                return function (t) {
                    return t.lift(new C0(t))
                }
            }
            class C0 {
                constructor(t) {
                    this.connectable = t
                }
                call(t, n) {
                    const {
                        connectable: r
                    } = this;
                    r._refCount++;
                    const i = new _0(t, r),
                        a = n.subscribe(i);
                    return i.closed || (i.connection = r.connect()), a
                }
            }
            class _0 extends De {
                constructor(t, n) {
                    super(t), this.connectable = n
                }
                _unsubscribe() {
                    const {
                        connectable: t
                    } = this;
                    if (!t) return void(this.connection = null);
                    this.connectable = null;
                    const n = t._refCount;
                    if (n <= 0) return void(this.connection = null);
                    if (t._refCount = n - 1, n > 1) return void(this.connection = null);
                    const {
                        connection: r
                    } = this, i = t._connection;
                    this.connection = null, i && (!r || i === r) && i.unsubscribe()
                }
            }
            class Pf extends be {
                constructor(t, n) {
                    super(), this.source = t, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(t) {
                    return this.getSubject().subscribe(t)
                }
                getSubject() {
                    const t = this._subject;
                    return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let t = this._connection;
                    return t || (this._isComplete = !1, t = this._connection = new ye, t.add(this.source.subscribe(new D0(this.getSubject(), this))), t.closed && (this._connection = null, t = ye.EMPTY)), t
                }
                refCount() {
                    return gl()(this)
                }
            }
            const w0 = (() => {
                const e = Pf.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: e._subscribe
                    },
                    _isComplete: {
                        value: e._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: e.getSubject
                    },
                    connect: {
                        value: e.connect
                    },
                    refCount: {
                        value: e.refCount
                    }
                }
            })();
            class D0 extends Tf {
                constructor(t, n) {
                    super(t), this.connectable = n
                }
                _error(t) {
                    this._unsubscribe(), super._error(t)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        const n = t._connection;
                        t._refCount = 0, t._subject = null, t._connection = null, n && n.unsubscribe()
                    }
                }
            }

            function x0() {
                return new vn
            }

            function oe(e) {
                for (let t in e)
                    if (e[t] === oe) return t;
                throw Error("Could not find renamed property on target object.")
            }

            function Q(e) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return "[" + e.map(Q).join(", ") + "]";
                if (null == e) return "" + e;
                if (e.overriddenName) return `${e.overriddenName}`;
                if (e.name) return `${e.name}`;
                const t = e.toString();
                if (null == t) return "" + t;
                const n = t.indexOf("\n");
                return -1 === n ? t : t.substring(0, n)
            }

            function vl(e, t) {
                return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
            }
            const T0 = oe({
                __forward_ref__: oe
            });

            function yl(e) {
                return e.__forward_ref__ = yl, e.toString = function () {
                    return Q(this())
                }, e
            }

            function M(e) {
                return function (e) {
                    return "function" == typeof e && e.hasOwnProperty(T0) && e.__forward_ref__ === yl
                }(e) ? e() : e
            }
            class Jn extends Error {
                constructor(t, n) {
                    super(function (e, t) {
                        return `${e?`NG0${e}: `:""}${t}`
                    }(t, n)), this.code = t
                }
            }

            function H(e) {
                return "string" == typeof e ? e : null == e ? "" : String(e)
            }

            function tt(e) {
                return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : H(e)
            }

            function fs(e, t) {
                const n = t ? ` in ${t}` : "";
                throw new Jn("201", `No provider for ${tt(e)} found${n}`)
            }

            function vt(e, t) {
                null == e && function (e, t, n, r) {
                    throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
                }(t, e, null, "!=")
            }

            function Y(e) {
                return {
                    token: e.token,
                    providedIn: e.providedIn || null,
                    factory: e.factory,
                    value: void 0
                }
            }

            function bn(e) {
                return {
                    providers: e.providers || [],
                    imports: e.imports || []
                }
            }

            function Cn(e) {
                return Lf(e, hs) || Lf(e, jf)
            }

            function Lf(e, t) {
                return e.hasOwnProperty(t) ? e[t] : null
            }

            function Vf(e) {
                return e && (e.hasOwnProperty(Cl) || e.hasOwnProperty(N0)) ? e[Cl] : null
            }
            const hs = oe({
                    \u0275prov: oe
                }),
                Cl = oe({
                    \u0275inj: oe
                }),
                jf = oe({
                    ngInjectableDef: oe
                }),
                N0 = oe({
                    ngInjectorDef: oe
                });
            var O = (() => ((O = O || {})[O.Default = 0] = "Default", O[O.Host = 1] = "Host", O[O.Self = 2] = "Self", O[O.SkipSelf = 4] = "SkipSelf", O[O.Optional = 8] = "Optional", O))();
            let _l;

            function On(e) {
                const t = _l;
                return _l = e, t
            }

            function Bf(e, t, n) {
                const r = Cn(e);
                return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & O.Optional ? null : void 0 !== t ? t : void fs(Q(e), "Injector")
            }

            function Pn(e) {
                return {
                    toString: e
                }.toString()
            }
            var xt = (() => ((xt = xt || {})[xt.OnPush = 0] = "OnPush", xt[xt.Default = 1] = "Default", xt))(),
                yt = (() => (function (e) {
                    e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom"
                }(yt || (yt = {})), yt))();
            const V0 = "undefined" != typeof globalThis && globalThis,
                j0 = "undefined" != typeof window && window,
                B0 = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                re = V0 || "undefined" != typeof global && global || j0 || B0,
                Tr = {},
                se = [],
                ps = oe({
                    \u0275cmp: oe
                }),
                wl = oe({
                    \u0275dir: oe
                }),
                Dl = oe({
                    \u0275pipe: oe
                }),
                Hf = oe({
                    \u0275mod: oe
                }),
                _n = oe({
                    \u0275fac: oe
                }),
                Vi = oe({
                    __NG_ELEMENT_ID__: oe
                });
            let H0 = 0;

            function ne(e) {
                return Pn(() => {
                    const n = {},
                        r = {
                            type: e.type,
                            providersResolver: null,
                            decls: e.decls,
                            vars: e.vars,
                            factory: null,
                            template: e.template || null,
                            consts: e.consts || null,
                            ngContentSelectors: e.ngContentSelectors,
                            hostBindings: e.hostBindings || null,
                            hostVars: e.hostVars || 0,
                            hostAttrs: e.hostAttrs || null,
                            contentQueries: e.contentQueries || null,
                            declaredInputs: n,
                            inputs: null,
                            outputs: null,
                            exportAs: e.exportAs || null,
                            onPush: e.changeDetection === xt.OnPush,
                            directiveDefs: null,
                            pipeDefs: null,
                            selectors: e.selectors || se,
                            viewQuery: e.viewQuery || null,
                            features: e.features || null,
                            data: e.data || {},
                            encapsulation: e.encapsulation || yt.Emulated,
                            id: "c",
                            styles: e.styles || se,
                            _: null,
                            setInput: null,
                            schemas: e.schemas || null,
                            tView: null
                        },
                        i = e.directives,
                        a = e.features,
                        l = e.pipes;
                    return r.id += H0++, r.inputs = Wf(e.inputs, n), r.outputs = Wf(e.outputs), a && a.forEach(u => u(r)), r.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(Uf) : null, r.pipeDefs = l ? () => ("function" == typeof l ? l() : l).map($f) : null, r
                })
            }

            function Uf(e) {
                return Ye(e) || function (e) {
                    return e[wl] || null
                }(e)
            }

            function $f(e) {
                return function (e) {
                    return e[Dl] || null
                }(e)
            }
            const qf = {};

            function Xn(e) {
                return Pn(() => {
                    const t = {
                        type: e.type,
                        bootstrap: e.bootstrap || se,
                        declarations: e.declarations || se,
                        imports: e.imports || se,
                        exports: e.exports || se,
                        transitiveCompileScopes: null,
                        schemas: e.schemas || null,
                        id: e.id || null
                    };
                    return null != e.id && (qf[e.id] = e.type), t
                })
            }

            function Wf(e, t) {
                if (null == e) return Tr;
                const n = {};
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        let i = e[r],
                            a = i;
                        Array.isArray(i) && (a = i[1], i = i[0]), n[i] = r, t && (t[i] = a)
                    } return n
            }
            const Qe = ne;

            function Ye(e) {
                return e[ps] || null
            }

            function St(e, t) {
                const n = e[Hf] || null;
                if (!n && !0 === t) throw new Error(`Type ${Q(e)} does not have '\u0275mod' property.`);
                return n
            }
            const z = 11;

            function rn(e) {
                return Array.isArray(e) && "object" == typeof e[1]
            }

            function Ht(e) {
                return Array.isArray(e) && !0 === e[1]
            }

            function Al(e) {
                return 0 != (8 & e.flags)
            }

            function ys(e) {
                return 2 == (2 & e.flags)
            }

            function bs(e) {
                return 1 == (1 & e.flags)
            }

            function Ut(e) {
                return null !== e.template
            }

            function G0(e) {
                return 0 != (512 & e[2])
            }

            function ir(e, t) {
                return e.hasOwnProperty(_n) ? e[_n] : null
            }
            class Gf {
                constructor(t, n, r) {
                    this.previousValue = t, this.currentValue = n, this.firstChange = r
                }
                isFirstChange() {
                    return this.firstChange
                }
            }

            function or() {
                return Qf
            }

            function Qf(e) {
                return e.type.prototype.ngOnChanges && (e.setInput = Z0), K0
            }

            function K0() {
                const e = Kf(this),
                    t = null == e ? void 0 : e.current;
                if (t) {
                    const n = e.previous;
                    if (n === Tr) e.previous = t;
                    else
                        for (let r in t) n[r] = t[r];
                    e.current = null, this.ngOnChanges(t)
                }
            }

            function Z0(e, t, n, r) {
                const i = Kf(e) || function (e, t) {
                        return e[Yf] = t
                    }(e, {
                        previous: Tr,
                        current: null
                    }),
                    a = i.current || (i.current = {}),
                    l = i.previous,
                    u = this.declaredInputs[n],
                    c = l[u];
                a[u] = new Gf(c && c.currentValue, t, l === Tr), e[r] = t
            }
            or.ngInherit = !0;
            const Yf = "__ngSimpleChanges__";

            function Kf(e) {
                return e[Yf] || null
            }
            let Tl;

            function Ce(e) {
                return !!e.listen
            }
            const Xf = {
                createRenderer: (e, t) => void 0 !== Tl ? Tl : "undefined" != typeof document ? document : void 0
            };

            function Te(e) {
                for (; Array.isArray(e);) e = e[0];
                return e
            }

            function Mt(e, t) {
                return Te(t[e.index])
            }

            function Ml(e, t) {
                return e.data[t]
            }

            function Ct(e, t) {
                const n = t[e];
                return rn(n) ? n : n[0]
            }

            function eh(e) {
                return 4 == (4 & e[2])
            }

            function Rl(e) {
                return 128 == (128 & e[2])
            }

            function Ln(e, t) {
                return null == t ? null : e[t]
            }

            function th(e) {
                e[18] = 0
            }

            function Fl(e, t) {
                e[5] += t;
                let n = e,
                    r = e[3];
                for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) r[5] += t, n = r, r = r[3]
            }
            const V = {
                lFrame: uh(null),
                bindingsEnabled: !0,
                isInCheckNoChangesMode: !1
            };

            function nh() {
                return V.bindingsEnabled
            }

            function D() {
                return V.lFrame.lView
            }

            function ee() {
                return V.lFrame.tView
            }

            function Fe() {
                let e = rh();
                for (; null !== e && 64 === e.type;) e = e.parent;
                return e
            }

            function rh() {
                return V.lFrame.currentTNode
            }

            function on(e, t) {
                const n = V.lFrame;
                n.currentTNode = e, n.isParent = t
            }

            function Ol() {
                return V.lFrame.isParent
            }

            function _s() {
                return V.isInCheckNoChangesMode
            }

            function ws(e) {
                V.isInCheckNoChangesMode = e
            }

            function Pr() {
                return V.lFrame.bindingIndex++
            }

            function hC(e, t) {
                const n = V.lFrame;
                n.bindingIndex = n.bindingRootIndex = e, Nl(t)
            }

            function Nl(e) {
                V.lFrame.currentDirectiveIndex = e
            }

            function sh() {
                return V.lFrame.currentQueryIndex
            }

            function Vl(e) {
                V.lFrame.currentQueryIndex = e
            }

            function gC(e) {
                const t = e[1];
                return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null
            }

            function ah(e, t, n) {
                if (n & O.SkipSelf) {
                    let i = t,
                        a = e;
                    for (; !(i = i.parent, null !== i || n & O.Host || (i = gC(a), null === i || (a = a[15], 10 & i.type))););
                    if (null === i) return !1;
                    t = i, e = a
                }
                const r = V.lFrame = lh();
                return r.currentTNode = t, r.lView = e, !0
            }

            function Ds(e) {
                const t = lh(),
                    n = e[1];
                V.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
            }

            function lh() {
                const e = V.lFrame,
                    t = null === e ? null : e.child;
                return null === t ? uh(e) : t
            }

            function uh(e) {
                const t = {
                    currentTNode: null,
                    isParent: !0,
                    lView: null,
                    tView: null,
                    selectedIndex: -1,
                    contextLView: null,
                    elementDepthCount: 0,
                    currentNamespace: null,
                    currentDirectiveIndex: -1,
                    bindingRootIndex: -1,
                    bindingIndex: -1,
                    currentQueryIndex: 0,
                    parent: e,
                    child: null,
                    inI18n: !1
                };
                return null !== e && (e.child = t), t
            }

            function ch() {
                const e = V.lFrame;
                return V.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
            }
            const dh = ch;

            function Es() {
                const e = ch();
                e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
            }

            function rt() {
                return V.lFrame.selectedIndex
            }

            function Vn(e) {
                V.lFrame.selectedIndex = e
            }

            function _e() {
                const e = V.lFrame;
                return Ml(e.tView, e.selectedIndex)
            }

            function Is(e, t) {
                for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                    const a = e.data[n].type.prototype,
                        {
                            ngAfterContentInit: l,
                            ngAfterContentChecked: u,
                            ngAfterViewInit: c,
                            ngAfterViewChecked: h,
                            ngOnDestroy: p
                        } = a;
                    l && (e.contentHooks || (e.contentHooks = [])).push(-n, l), u && ((e.contentHooks || (e.contentHooks = [])).push(n, u), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, u)), c && (e.viewHooks || (e.viewHooks = [])).push(-n, c), h && ((e.viewHooks || (e.viewHooks = [])).push(n, h), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, h)), null != p && (e.destroyHooks || (e.destroyHooks = [])).push(n, p)
                }
            }

            function As(e, t, n) {
                fh(e, t, 3, n)
            }

            function xs(e, t, n, r) {
                (3 & e[2]) === n && fh(e, t, n, r)
            }

            function jl(e, t) {
                let n = e[2];
                (3 & n) === t && (n &= 2047, n += 1, e[2] = n)
            }

            function fh(e, t, n, r) {
                const a = null != r ? r : -1,
                    l = t.length - 1;
                let u = 0;
                for (let c = void 0 !== r ? 65535 & e[18] : 0; c < l; c++)
                    if ("number" == typeof t[c + 1]) {
                        if (u = t[c], null != r && u >= r) break
                    } else t[c] < 0 && (e[18] += 65536), (u < a || -1 == a) && (EC(e, n, t, c), e[18] = (4294901760 & e[18]) + c + 2), c++
            }

            function EC(e, t, n, r) {
                const i = n[r] < 0,
                    a = n[r + 1],
                    u = e[i ? -n[r] : n[r]];
                if (i) {
                    if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                        e[2] += 2048;
                        try {
                            a.call(u)
                        } finally {}
                    }
                } else try {
                    a.call(u)
                } finally {}
            }
            class $i {
                constructor(t, n, r) {
                    this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
                }
            }

            function Ss(e, t, n) {
                const r = Ce(e);
                let i = 0;
                for (; i < n.length;) {
                    const a = n[i];
                    if ("number" == typeof a) {
                        if (0 !== a) break;
                        i++;
                        const l = n[i++],
                            u = n[i++],
                            c = n[i++];
                        r ? e.setAttribute(t, u, c, l) : t.setAttributeNS(l, u, c)
                    } else {
                        const l = a,
                            u = n[++i];
                        Hl(l) ? r && e.setProperty(t, l, u) : r ? e.setAttribute(t, l, u) : t.setAttribute(l, u), i++
                    }
                }
                return i
            }

            function hh(e) {
                return 3 === e || 4 === e || 6 === e
            }

            function Hl(e) {
                return 64 === e.charCodeAt(0)
            }

            function Ts(e, t) {
                if (null !== t && 0 !== t.length)
                    if (null === e || 0 === e.length) e = t.slice();
                    else {
                        let n = -1;
                        for (let r = 0; r < t.length; r++) {
                            const i = t[r];
                            "number" == typeof i ? n = i : 0 === n || ph(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
                        }
                    } return e
            }

            function ph(e, t, n, r, i) {
                let a = 0,
                    l = e.length;
                if (-1 === t) l = -1;
                else
                    for (; a < e.length;) {
                        const u = e[a++];
                        if ("number" == typeof u) {
                            if (u === t) {
                                l = -1;
                                break
                            }
                            if (u > t) {
                                l = a - 1;
                                break
                            }
                        }
                    }
                for (; a < e.length;) {
                    const u = e[a];
                    if ("number" == typeof u) break;
                    if (u === n) {
                        if (null === r) return void(null !== i && (e[a + 1] = i));
                        if (r === e[a + 1]) return void(e[a + 2] = i)
                    }
                    a++, null !== r && a++, null !== i && a++
                } - 1 !== l && (e.splice(l, 0, t), a = l + 1), e.splice(a++, 0, n), null !== r && e.splice(a++, 0, r), null !== i && e.splice(a++, 0, i)
            }

            function gh(e) {
                return -1 !== e
            }

            function Nr(e) {
                return 32767 & e
            }

            function Lr(e, t) {
                let n = function (e) {
                        return e >> 16
                    }(e),
                    r = t;
                for (; n > 0;) r = r[15], n--;
                return r
            }
            let Ul = !0;

            function ks(e) {
                const t = Ul;
                return Ul = e, t
            }
            let kC = 0;

            function Wi(e, t) {
                const n = ql(e, t);
                if (-1 !== n) return n;
                const r = t[1];
                r.firstCreatePass && (e.injectorIndex = t.length, $l(r.data, e), $l(t, null), $l(r.blueprint, null));
                const i = Ms(e, t),
                    a = e.injectorIndex;
                if (gh(i)) {
                    const l = Nr(i),
                        u = Lr(i, t),
                        c = u[1].data;
                    for (let h = 0; h < 8; h++) t[a + h] = u[l + h] | c[l + h]
                }
                return t[a + 8] = i, a
            }

            function $l(e, t) {
                e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
            }

            function ql(e, t) {
                return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
            }

            function Ms(e, t) {
                if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
                let n = 0,
                    r = null,
                    i = t;
                for (; null !== i;) {
                    const a = i[1],
                        l = a.type;
                    if (r = 2 === l ? a.declTNode : 1 === l ? i[6] : null, null === r) return -1;
                    if (n++, i = i[15], -1 !== r.injectorIndex) return r.injectorIndex | n << 16
                }
                return -1
            }

            function Rs(e, t, n) {
                ! function (e, t, n) {
                    let r;
                    "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Vi) && (r = n[Vi]), null == r && (r = n[Vi] = kC++);
                    const i = 255 & r;
                    t.data[e + (i >> 5)] |= 1 << i
                }(e, t, n)
            }

            function yh(e, t, n) {
                if (n & O.Optional) return e;
                fs(t, "NodeInjector")
            }

            function bh(e, t, n, r) {
                if (n & O.Optional && void 0 === r && (r = null), 0 == (n & (O.Self | O.Host))) {
                    const i = e[9],
                        a = On(void 0);
                    try {
                        return i ? i.get(t, r, n & O.Optional) : Bf(t, r, n & O.Optional)
                    } finally {
                        On(a)
                    }
                }
                return yh(r, t, n)
            }

            function Ch(e, t, n, r = O.Default, i) {
                if (null !== e) {
                    const a = function (e) {
                        if ("string" == typeof e) return e.charCodeAt(0) || 0;
                        const t = e.hasOwnProperty(Vi) ? e[Vi] : void 0;
                        return "number" == typeof t ? t >= 0 ? 255 & t : FC : t
                    }(n);
                    if ("function" == typeof a) {
                        if (!ah(t, e, r)) return r & O.Host ? yh(i, n, r) : bh(t, n, r, i);
                        try {
                            const l = a(r);
                            if (null != l || r & O.Optional) return l;
                            fs(n)
                        } finally {
                            dh()
                        }
                    } else if ("number" == typeof a) {
                        let l = null,
                            u = ql(e, t),
                            c = -1,
                            h = r & O.Host ? t[16][6] : null;
                        for ((-1 === u || r & O.SkipSelf) && (c = -1 === u ? Ms(e, t) : t[u + 8], -1 !== c && Dh(r, !1) ? (l = t[1], u = Nr(c), t = Lr(c, t)) : u = -1); - 1 !== u;) {
                            const p = t[1];
                            if (wh(a, u, p.data)) {
                                const g = OC(u, t, n, l, r, h);
                                if (g !== _h) return g
                            }
                            c = t[u + 8], -1 !== c && Dh(r, t[1].data[u + 8] === h) && wh(a, u, t) ? (l = p, u = Nr(c), t = Lr(c, t)) : u = -1
                        }
                    }
                }
                return bh(t, n, r, i)
            }
            const _h = {};

            function FC() {
                return new Vr(Fe(), D())
            }

            function OC(e, t, n, r, i, a) {
                const l = t[1],
                    u = l.data[e + 8],
                    p = Fs(u, l, n, null == r ? ys(u) && Ul : r != l && 0 != (3 & u.type), i & O.Host && a === u);
                return null !== p ? zi(t, l, p, u) : _h
            }

            function Fs(e, t, n, r, i) {
                const a = e.providerIndexes,
                    l = t.data,
                    u = 1048575 & a,
                    c = e.directiveStart,
                    p = a >> 20,
                    m = i ? u + p : e.directiveEnd;
                for (let v = r ? u : u + p; v < m; v++) {
                    const y = l[v];
                    if (v < c && n === y || v >= c && y.type === n) return v
                }
                if (i) {
                    const v = l[c];
                    if (v && Ut(v) && v.type === n) return c
                }
                return null
            }

            function zi(e, t, n, r) {
                let i = e[n];
                const a = t.data;
                if (function (e) {
                        return e instanceof $i
                    }(i)) {
                    const l = i;
                    l.resolving && function (e, t) {
                        throw new Jn("200", `Circular dependency in DI detected for ${e}`)
                    }(tt(a[n]));
                    const u = ks(l.canSeeViewProviders);
                    l.resolving = !0;
                    const c = l.injectImpl ? On(l.injectImpl) : null;
                    ah(e, r, O.Default);
                    try {
                        i = e[n] = l.factory(void 0, a, e, r), t.firstCreatePass && n >= r.directiveStart && function (e, t, n) {
                            const {
                                ngOnChanges: r,
                                ngOnInit: i,
                                ngDoCheck: a
                            } = t.type.prototype;
                            if (r) {
                                const l = Qf(t);
                                (n.preOrderHooks || (n.preOrderHooks = [])).push(e, l), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, l)
                            }
                            i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, i), a && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, a), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, a))
                        }(n, a[n], t)
                    } finally {
                        null !== c && On(c), ks(u), l.resolving = !1, dh()
                    }
                }
                return i
            }

            function wh(e, t, n) {
                return !!(n[t + (e >> 5)] & 1 << e)
            }

            function Dh(e, t) {
                return !(e & O.Self || e & O.Host && t)
            }
            class Vr {
                constructor(t, n) {
                    this._tNode = t, this._lView = n
                }
                get(t, n, r) {
                    return Ch(this._tNode, this._lView, t, r, n)
                }
            }

            function Gi(e) {
                return function (e, t) {
                    if ("class" === t) return e.classes;
                    if ("style" === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                        const r = n.length;
                        let i = 0;
                        for (; i < r;) {
                            const a = n[i];
                            if (hh(a)) break;
                            if (0 === a) i += 2;
                            else if ("number" == typeof a)
                                for (i++; i < r && "string" == typeof n[i];) i++;
                            else {
                                if (a === t) return n[i + 1];
                                i += 2
                            }
                        }
                    }
                    return null
                }(Fe(), e)
            }
            const Br = "__parameters__";

            function sr(e, t, n) {
                return Pn(() => {
                    const r = function (e) {
                        return function (...n) {
                            if (e) {
                                const r = e(...n);
                                for (const i in r) this[i] = r[i]
                            }
                        }
                    }(t);

                    function i(...a) {
                        if (this instanceof i) return r.apply(this, a), this;
                        const l = new i(...a);
                        return u.annotation = l, u;

                        function u(c, h, p) {
                            const g = c.hasOwnProperty(Br) ? c[Br] : Object.defineProperty(c, Br, {
                                value: []
                            })[Br];
                            for (; g.length <= p;) g.push(null);
                            return (g[p] = g[p] || []).push(l), c
                        }
                    }
                    return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
                })
            }
            class te {
                constructor(t, n) {
                    this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = Y({
                        token: this,
                        providedIn: n.providedIn || "root",
                        factory: n.factory
                    }))
                }
                toString() {
                    return `InjectionToken ${this._desc}`
                }
            }
            const jC = new te("AnalyzeForEntryComponents");

            function Rt(e, t) {
                void 0 === t && (t = e);
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    Array.isArray(r) ? (t === e && (t = e.slice(0, n)), Rt(r, t)) : t !== e && t.push(r)
                }
                return t
            }

            function sn(e, t) {
                e.forEach(n => Array.isArray(n) ? sn(n, t) : t(n))
            }

            function Os(e, t, n) {
                t >= e.length ? e.push(n) : e.splice(t, 0, n)
            }

            function ar(e, t) {
                return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
            }
            const Ji = {},
                Kl = "__NG_DI_FLAG__",
                $r = "ngTempTokenPath",
                YC = /\n/gm,
                Zl = "__source",
                Jl = oe({
                    provide: String,
                    useValue: oe
                });
            let Xi;

            function qr(e) {
                const t = Xi;
                return Xi = e, t
            }

            function ZC(e, t = O.Default) {
                if (void 0 === Xi) throw new Error("inject() must be called from an injection context");
                return null === Xi ? Bf(e, void 0, t) : Xi.get(e, t & O.Optional ? null : void 0, t)
            }

            function R(e, t = O.Default) {
                return (_l || ZC)(M(e), t)
            }

            function lr(e) {
                const t = [];
                for (let n = 0; n < e.length; n++) {
                    const r = M(e[n]);
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        let i, a = O.Default;
                        for (let l = 0; l < r.length; l++) {
                            const u = r[l],
                                c = JC(u);
                            "number" == typeof c ? -1 === c ? i = u.token : a |= c : i = u
                        }
                        t.push(R(i, a))
                    } else t.push(R(r))
                }
                return t
            }

            function eo(e, t) {
                return e[Kl] = t, e.prototype[Kl] = t, e
            }

            function JC(e) {
                return e[Kl]
            }

            function Sh(e, t, n, r) {
                const i = e[$r];
                throw t[Zl] && i.unshift(t[Zl]), e.message = function (e, t, n, r = null) {
                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                    let i = Q(t);
                    if (Array.isArray(t)) i = t.map(Q).join(" -> ");
                    else if ("object" == typeof t) {
                        let a = [];
                        for (let l in t)
                            if (t.hasOwnProperty(l)) {
                                let u = t[l];
                                a.push(l + ":" + ("string" == typeof u ? JSON.stringify(u) : Q(u)))
                            } i = `{${a.join(", ")}}`
                    }
                    return `${n}${r?"("+r+")":""}[${i}]: ${e.replace(YC,"\n  ")}`
                }("\n" + e.message, i, n, r), e.ngTokenPath = i, e[$r] = null, e
            }
            const Wr = eo(sr("Inject", e => ({
                    token: e
                })), -1),
                ft = eo(sr("Optional"), 8),
                Hn = eo(sr("SkipSelf"), 4);
            class ur {
                constructor(t) {
                    this.changingThisBreaksApplicationSecurity = t
                }
                toString() {
                    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
                }
            }

            function an(e, t) {
                const n = function (e) {
                    return e instanceof ur && e.getTypeName() || null
                }(e);
                if (null != n && n !== t) {
                    if ("ResourceURL" === n && "URL" === t) return !0;
                    throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)
                }
                return n === t
            }
            const w_ = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
                D_ = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
            var ue = (() => ((ue = ue || {})[ue.NONE = 0] = "NONE", ue[ue.HTML = 1] = "HTML", ue[ue.STYLE = 2] = "STYLE", ue[ue.SCRIPT = 3] = "SCRIPT", ue[ue.URL = 4] = "URL", ue[ue.RESOURCE_URL = 5] = "RESOURCE_URL", ue))();

            function su(e) {
                const t = function () {
                    const e = D();
                    return e && e[12]
                }();
                return t ? t.sanitize(ue.URL, e) || "" : an(e, "URL") ? function (e) {
                    return e instanceof ur ? e.changingThisBreaksApplicationSecurity : e
                }(e) : function (e) {
                    return (e = String(e)).match(w_) || e.match(D_) ? e : "unsafe:" + e
                }(H(e))
            }
            const Gh = "__ngContext__";

            function Ze(e, t) {
                e[Gh] = t
            }

            function lu(e) {
                const t = function (e) {
                    return e[Gh] || null
                }(e);
                return t ? Array.isArray(t) ? t : t.lView : null
            }

            function Hs(e) {
                return e.ngOriginalError
            }

            function W_(e, ...t) {
                e.error(...t)
            }
            class cr {
                constructor() {
                    this._console = console
                }
                handleError(t) {
                    const n = this._findOriginalError(t),
                        r = this._findContext(t),
                        i = function (e) {
                            return e && e.ngErrorLogger || W_
                        }(t);
                    i(this._console, "ERROR", t), n && i(this._console, "ORIGINAL ERROR", n), r && i(this._console, "ERROR CONTEXT", r)
                }
                _findContext(t) {
                    return t ? function (e) {
                        return e.ngDebugContext
                    }(t) || this._findContext(Hs(t)) : null
                }
                _findOriginalError(t) {
                    let n = t && Hs(t);
                    for (; n && Hs(n);) n = Hs(n);
                    return n || null
                }
            }
            const np = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(re))();

            function un(e) {
                return e instanceof Function ? e() : e
            }
            var Dt = (() => ((Dt = Dt || {})[Dt.Important = 1] = "Important", Dt[Dt.DashCase = 2] = "DashCase", Dt))();

            function du(e, t) {
                return undefined(e, t)
            }

            function so(e) {
                const t = e[3];
                return Ht(t) ? t[3] : t
            }

            function fu(e) {
                return ap(e[13])
            }

            function hu(e) {
                return ap(e[4])
            }

            function ap(e) {
                for (; null !== e && !Ht(e);) e = e[4];
                return e
            }

            function Yr(e, t, n, r, i) {
                if (null != r) {
                    let a, l = !1;
                    Ht(r) ? a = r : rn(r) && (l = !0, r = r[0]);
                    const u = Te(r);
                    0 === e && null !== n ? null == i ? hp(t, n, u) : dr(t, n, u, i || null, !0) : 1 === e && null !== n ? dr(t, n, u, i || null, !0) : 2 === e ? function (e, t, n) {
                        const r = $s(e, t);
                        r && function (e, t, n, r) {
                            Ce(e) ? e.removeChild(t, n, r) : t.removeChild(n)
                        }(e, r, t, n)
                    }(t, u, l) : 3 === e && t.destroyNode(u), null != a && function (e, t, n, r, i) {
                        const a = n[7];
                        a !== Te(n) && Yr(t, e, r, a, i);
                        for (let u = 10; u < n.length; u++) {
                            const c = n[u];
                            ao(c[1], c, e, t, r, a)
                        }
                    }(t, e, a, n, i)
                }
            }

            function gu(e, t, n) {
                return Ce(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
            }

            function up(e, t) {
                const n = e[9],
                    r = n.indexOf(t),
                    i = t[3];
                1024 & t[2] && (t[2] &= -1025, Fl(i, -1)), n.splice(r, 1)
            }

            function mu(e, t) {
                if (e.length <= 10) return;
                const n = 10 + t,
                    r = e[n];
                if (r) {
                    const i = r[17];
                    null !== i && i !== e && up(i, r), t > 0 && (e[n - 1][4] = r[4]);
                    const a = ar(e, 10 + t);
                    ! function (e, t) {
                        ao(e, t, t[z], 2, null, null), t[0] = null, t[6] = null
                    }(r[1], r);
                    const l = a[19];
                    null !== l && l.detachView(a[1]), r[3] = null, r[4] = null, r[2] &= -129
                }
                return r
            }

            function cp(e, t) {
                if (!(256 & t[2])) {
                    const n = t[z];
                    Ce(n) && n.destroyNode && ao(e, t, n, 3, null, null),
                        function (e) {
                            let t = e[13];
                            if (!t) return vu(e[1], e);
                            for (; t;) {
                                let n = null;
                                if (rn(t)) n = t[13];
                                else {
                                    const r = t[10];
                                    r && (n = r)
                                }
                                if (!n) {
                                    for (; t && !t[4] && t !== e;) rn(t) && vu(t[1], t), t = t[3];
                                    null === t && (t = e), rn(t) && vu(t[1], t), n = t && t[4]
                                }
                                t = n
                            }
                        }(t)
                }
            }

            function vu(e, t) {
                if (!(256 & t[2])) {
                    t[2] &= -129, t[2] |= 256,
                        function (e, t) {
                            let n;
                            if (null != e && null != (n = e.destroyHooks))
                                for (let r = 0; r < n.length; r += 2) {
                                    const i = t[n[r]];
                                    if (!(i instanceof $i)) {
                                        const a = n[r + 1];
                                        if (Array.isArray(a))
                                            for (let l = 0; l < a.length; l += 2) {
                                                const u = i[a[l]],
                                                    c = a[l + 1];
                                                try {
                                                    c.call(u)
                                                } finally {}
                                            } else try {
                                                a.call(i)
                                            } finally {}
                                    }
                                }
                        }(e, t),
                        function (e, t) {
                            const n = e.cleanup,
                                r = t[7];
                            let i = -1;
                            if (null !== n)
                                for (let a = 0; a < n.length - 1; a += 2)
                                    if ("string" == typeof n[a]) {
                                        const l = n[a + 1],
                                            u = "function" == typeof l ? l(t) : Te(t[l]),
                                            c = r[i = n[a + 2]],
                                            h = n[a + 3];
                                        "boolean" == typeof h ? u.removeEventListener(n[a], c, h) : h >= 0 ? r[i = h]() : r[i = -h].unsubscribe(), a += 2
                                    } else {
                                        const l = r[i = n[a + 1]];
                                        n[a].call(l)
                                    } if (null !== r) {
                                for (let a = i + 1; a < r.length; a++) r[a]();
                                t[7] = null
                            }
                        }(e, t), 1 === t[1].type && Ce(t[z]) && t[z].destroy();
                    const n = t[17];
                    if (null !== n && Ht(t[3])) {
                        n !== t[3] && up(n, t);
                        const r = t[19];
                        null !== r && r.detachView(e)
                    }
                }
            }

            function dp(e, t, n) {
                return function (e, t, n) {
                    let r = t;
                    for (; null !== r && 40 & r.type;) r = (t = r).parent;
                    if (null === r) return n[0];
                    if (2 & r.flags) {
                        const i = e.data[r.directiveStart].encapsulation;
                        if (i === yt.None || i === yt.Emulated) return null
                    }
                    return Mt(r, n)
                }(e, t.parent, n)
            }

            function dr(e, t, n, r, i) {
                Ce(e) ? e.insertBefore(t, n, r, i) : t.insertBefore(n, r, i)
            }

            function hp(e, t, n) {
                Ce(e) ? e.appendChild(t, n) : t.appendChild(n)
            }

            function pp(e, t, n, r, i) {
                null !== r ? dr(e, t, n, r, i) : hp(e, t, n)
            }

            function $s(e, t) {
                return Ce(e) ? e.parentNode(t) : t.parentNode
            }
            let vp = function (e, t, n) {
                return 40 & e.type ? Mt(e, n) : null
            };

            function qs(e, t, n, r) {
                const i = dp(e, r, t),
                    a = t[z],
                    u = function (e, t, n) {
                        return vp(e, t, n)
                    }(r.parent || t[6], r, t);
                if (null != i)
                    if (Array.isArray(n))
                        for (let c = 0; c < n.length; c++) pp(a, i, n[c], u, !1);
                    else pp(a, i, n, u, !1)
            }

            function Ws(e, t) {
                if (null !== t) {
                    const n = t.type;
                    if (3 & n) return Mt(t, e);
                    if (4 & n) return bu(-1, e[t.index]);
                    if (8 & n) {
                        const r = t.child;
                        if (null !== r) return Ws(e, r); {
                            const i = e[t.index];
                            return Ht(i) ? bu(-1, i) : Te(i)
                        }
                    }
                    if (32 & n) return du(t, e)() || Te(e[t.index]); {
                        const r = bp(e, t);
                        return null !== r ? Array.isArray(r) ? r[0] : Ws(so(e[16]), r) : Ws(e, t.next)
                    }
                }
                return null
            }

            function bp(e, t) {
                return null !== t ? e[16][6].projection[t.projection] : null
            }

            function bu(e, t) {
                const n = 10 + e + 1;
                if (n < t.length) {
                    const r = t[n],
                        i = r[1].firstChild;
                    if (null !== i) return Ws(r, i)
                }
                return t[7]
            }

            function Cu(e, t, n, r, i, a, l) {
                for (; null != n;) {
                    const u = r[n.index],
                        c = n.type;
                    if (l && 0 === t && (u && Ze(Te(u), r), n.flags |= 4), 64 != (64 & n.flags))
                        if (8 & c) Cu(e, t, n.child, r, i, a, !1), Yr(t, e, i, u, a);
                        else if (32 & c) {
                        const h = du(n, r);
                        let p;
                        for (; p = h();) Yr(t, e, i, p, a);
                        Yr(t, e, i, u, a)
                    } else 16 & c ? _p(e, t, r, n, i, a) : Yr(t, e, i, u, a);
                    n = l ? n.projectionNext : n.next
                }
            }

            function ao(e, t, n, r, i, a) {
                Cu(n, r, e.firstChild, t, i, a, !1)
            }

            function _p(e, t, n, r, i, a) {
                const l = n[16],
                    c = l[6].projection[r.projection];
                if (Array.isArray(c))
                    for (let h = 0; h < c.length; h++) Yr(t, e, i, c[h], a);
                else Cu(e, t, c, l[3], i, a, !0)
            }

            function wp(e, t, n) {
                Ce(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
            }

            function _u(e, t, n) {
                Ce(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
            }

            function Dp(e, t, n) {
                let r = e.length;
                for (;;) {
                    const i = e.indexOf(t, n);
                    if (-1 === i) return i;
                    if (0 === i || e.charCodeAt(i - 1) <= 32) {
                        const a = t.length;
                        if (i + a === r || e.charCodeAt(i + a) <= 32) return i
                    }
                    n = i + 1
                }
            }
            const Ep = "ng-template";

            function vw(e, t, n) {
                let r = 0;
                for (; r < e.length;) {
                    let i = e[r++];
                    if (n && "class" === i) {
                        if (i = e[r], -1 !== Dp(i.toLowerCase(), t, 0)) return !0
                    } else if (1 === i) {
                        for (; r < e.length && "string" == typeof (i = e[r++]);)
                            if (i.toLowerCase() === t) return !0;
                        return !1
                    }
                }
                return !1
            }

            function Ip(e) {
                return 4 === e.type && e.value !== Ep
            }

            function yw(e, t, n) {
                return t === (4 !== e.type || n ? e.value : Ep)
            }

            function bw(e, t, n) {
                let r = 4;
                const i = e.attrs || [],
                    a = function (e) {
                        for (let t = 0; t < e.length; t++)
                            if (hh(e[t])) return t;
                        return e.length
                    }(i);
                let l = !1;
                for (let u = 0; u < t.length; u++) {
                    const c = t[u];
                    if ("number" != typeof c) {
                        if (!l)
                            if (4 & r) {
                                if (r = 2 | 1 & r, "" !== c && !yw(e, c, n) || "" === c && 1 === t.length) {
                                    if ($t(r)) return !1;
                                    l = !0
                                }
                            } else {
                                const h = 8 & r ? c : t[++u];
                                if (8 & r && null !== e.attrs) {
                                    if (!vw(e.attrs, h, n)) {
                                        if ($t(r)) return !1;
                                        l = !0
                                    }
                                    continue
                                }
                                const g = Cw(8 & r ? "class" : c, i, Ip(e), n);
                                if (-1 === g) {
                                    if ($t(r)) return !1;
                                    l = !0;
                                    continue
                                }
                                if ("" !== h) {
                                    let m;
                                    m = g > a ? "" : i[g + 1].toLowerCase();
                                    const v = 8 & r ? m : null;
                                    if (v && -1 !== Dp(v, h, 0) || 2 & r && h !== m) {
                                        if ($t(r)) return !1;
                                        l = !0
                                    }
                                }
                            }
                    } else {
                        if (!l && !$t(r) && !$t(c)) return !1;
                        if (l && $t(c)) continue;
                        l = !1, r = c | 1 & r
                    }
                }
                return $t(r) || l
            }

            function $t(e) {
                return 0 == (1 & e)
            }

            function Cw(e, t, n, r) {
                if (null === t) return -1;
                let i = 0;
                if (r || !n) {
                    let a = !1;
                    for (; i < t.length;) {
                        const l = t[i];
                        if (l === e) return i;
                        if (3 === l || 6 === l) a = !0;
                        else {
                            if (1 === l || 2 === l) {
                                let u = t[++i];
                                for (;
                                    "string" == typeof u;) u = t[++i];
                                continue
                            }
                            if (4 === l) break;
                            if (0 === l) {
                                i += 4;
                                continue
                            }
                        }
                        i += a ? 1 : 2
                    }
                    return -1
                }
                return function (e, t) {
                    let n = e.indexOf(4);
                    if (n > -1)
                        for (n++; n < e.length;) {
                            const r = e[n];
                            if ("number" == typeof r) return -1;
                            if (r === t) return n;
                            n++
                        }
                    return -1
                }(t, e)
            }

            function Ap(e, t, n = !1) {
                for (let r = 0; r < t.length; r++)
                    if (bw(e, t[r], n)) return !0;
                return !1
            }

            function xp(e, t) {
                return e ? ":not(" + t.trim() + ")" : t
            }

            function Iw(e) {
                let t = e[0],
                    n = 1,
                    r = 2,
                    i = "",
                    a = !1;
                for (; n < e.length;) {
                    let l = e[n];
                    if ("string" == typeof l)
                        if (2 & r) {
                            const u = e[++n];
                            i += "[" + l + (u.length > 0 ? '="' + u + '"' : "") + "]"
                        } else 8 & r ? i += "." + l : 4 & r && (i += " " + l);
                    else "" !== i && !$t(l) && (t += xp(a, i), i = ""), r = l, a = a || !$t(r);
                    n++
                }
                return "" !== i && (t += xp(a, i)), t
            }
            const U = {};

            function S(e) {
                Sp(ee(), D(), rt() + e, _s())
            }

            function Sp(e, t, n, r) {
                if (!r)
                    if (3 == (3 & t[2])) {
                        const a = e.preOrderCheckHooks;
                        null !== a && As(t, a, n)
                    } else {
                        const a = e.preOrderHooks;
                        null !== a && xs(t, a, 0, n)
                    } Vn(n)
            }

            function jp(e, t) {
                const n = e.contentQueries;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2) {
                        const i = n[r],
                            a = n[r + 1];
                        if (-1 !== a) {
                            const l = e.data[a];
                            Vl(i), l.contentQueries(2, t[a], a)
                        }
                    }
            }

            function lo(e, t, n, r, i, a, l, u, c, h) {
                const p = t.blueprint.slice();
                return p[0] = i, p[2] = 140 | r, th(p), p[3] = p[15] = e, p[8] = n, p[10] = l || e && e[10], p[z] = u || e && e[z], p[12] = c || e && e[12] || null, p[9] = h || e && e[9] || null, p[6] = a, p[16] = 2 == t.type ? e[16] : p, p
            }

            function Kr(e, t, n, r, i) {
                let a = e.data[t];
                if (null === a) a = function (e, t, n, r, i) {
                    const a = rh(),
                        l = Ol(),
                        c = e.data[t] = function (e, t, n, r, i, a) {
                            return {
                                type: n,
                                index: r,
                                insertBeforeIndex: null,
                                injectorIndex: t ? t.injectorIndex : -1,
                                directiveStart: -1,
                                directiveEnd: -1,
                                directiveStylingLast: -1,
                                propertyBindings: null,
                                flags: 0,
                                providerIndexes: 0,
                                value: i,
                                attrs: a,
                                mergedAttrs: null,
                                localNames: null,
                                initialInputs: void 0,
                                inputs: null,
                                outputs: null,
                                tViews: null,
                                next: null,
                                projectionNext: null,
                                child: null,
                                parent: t,
                                projection: null,
                                styles: null,
                                stylesWithoutHost: null,
                                residualStyles: void 0,
                                classes: null,
                                classesWithoutHost: null,
                                residualClasses: void 0,
                                classBindings: 0,
                                styleBindings: 0
                            }
                        }(0, l ? a : a && a.parent, n, t, r, i);
                    return null === e.firstChild && (e.firstChild = c), null !== a && (l ? null == a.child && null !== c.parent && (a.child = c) : null === a.next && (a.next = c)), c
                }(e, t, n, r, i), V.lFrame.inI18n && (a.flags |= 64);
                else if (64 & a.type) {
                    a.type = n, a.value = r, a.attrs = i;
                    const l = function () {
                        const e = V.lFrame,
                            t = e.currentTNode;
                        return e.isParent ? t : t.parent
                    }();
                    a.injectorIndex = null === l ? -1 : l.injectorIndex
                }
                return on(a, !0), a
            }

            function Zr(e, t, n, r) {
                if (0 === n) return -1;
                const i = t.length;
                for (let a = 0; a < n; a++) t.push(r), e.blueprint.push(r), e.data.push(null);
                return i
            }

            function uo(e, t, n) {
                Ds(t);
                try {
                    const r = e.viewQuery;
                    null !== r && Uu(1, r, n);
                    const i = e.template;
                    null !== i && Bp(e, t, i, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && jp(e, t), e.staticViewQueries && Uu(2, e.viewQuery, n);
                    const a = e.components;
                    null !== a && function (e, t) {
                        for (let n = 0; n < t.length; n++) aD(e, t[n])
                    }(t, a)
                } catch (r) {
                    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r
                } finally {
                    t[2] &= -5, Es()
                }
            }

            function Jr(e, t, n, r) {
                const i = t[2];
                if (256 == (256 & i)) return;
                Ds(t);
                const a = _s();
                try {
                    th(t),
                        function (e) {
                            V.lFrame.bindingIndex = e
                        }(e.bindingStartIndex), null !== n && Bp(e, t, n, 2, r);
                    const l = 3 == (3 & i);
                    if (!a)
                        if (l) {
                            const h = e.preOrderCheckHooks;
                            null !== h && As(t, h, null)
                        } else {
                            const h = e.preOrderHooks;
                            null !== h && xs(t, h, 0, null), jl(t, 0)
                        } if (function (e) {
                            for (let t = fu(e); null !== t; t = hu(t)) {
                                if (!t[2]) continue;
                                const n = t[9];
                                for (let r = 0; r < n.length; r++) {
                                    const i = n[r],
                                        a = i[3];
                                    0 == (1024 & i[2]) && Fl(a, 1), i[2] |= 1024
                                }
                            }
                        }(t), function (e) {
                            for (let t = fu(e); null !== t; t = hu(t))
                                for (let n = 10; n < t.length; n++) {
                                    const r = t[n],
                                        i = r[1];
                                    Rl(r) && Jr(i, r, i.template, r[8])
                                }
                        }(t), null !== e.contentQueries && jp(e, t), !a)
                        if (l) {
                            const h = e.contentCheckHooks;
                            null !== h && As(t, h)
                        } else {
                            const h = e.contentHooks;
                            null !== h && xs(t, h, 1), jl(t, 1)
                        }!
                    function (e, t) {
                        const n = e.hostBindingOpCodes;
                        if (null !== n) try {
                            for (let r = 0; r < n.length; r++) {
                                const i = n[r];
                                if (i < 0) Vn(~i);
                                else {
                                    const a = i,
                                        l = n[++r],
                                        u = n[++r];
                                    hC(l, a), u(2, t[a])
                                }
                            }
                        } finally {
                            Vn(-1)
                        }
                    }(e, t);
                    const u = e.components;
                    null !== u && function (e, t) {
                        for (let n = 0; n < t.length; n++) sD(e, t[n])
                    }(t, u);
                    const c = e.viewQuery;
                    if (null !== c && Uu(2, c, r), !a)
                        if (l) {
                            const h = e.viewCheckHooks;
                            null !== h && As(t, h)
                        } else {
                            const h = e.viewHooks;
                            null !== h && xs(t, h, 2), jl(t, 2)
                        }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), a || (t[2] &= -73), 1024 & t[2] && (t[2] &= -1025, Fl(t[3], -1))
                } finally {
                    Es()
                }
            }

            function Hw(e, t, n, r) {
                const i = t[10],
                    a = !_s(),
                    l = eh(t);
                try {
                    a && !l && i.begin && i.begin(), l && uo(e, t, r), Jr(e, t, n, r)
                } finally {
                    a && !l && i.end && i.end()
                }
            }

            function Bp(e, t, n, r, i) {
                const a = rt(),
                    l = 2 & r;
                try {
                    Vn(-1), l && t.length > 20 && Sp(e, t, 20, _s()), n(r, i)
                } finally {
                    Vn(a)
                }
            }

            function Up(e) {
                const t = e.tView;
                return null === t || t.incompleteFirstPass ? e.tView = Ys(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
            }

            function Ys(e, t, n, r, i, a, l, u, c, h) {
                const p = 20 + r,
                    g = p + i,
                    m = function (e, t) {
                        const n = [];
                        for (let r = 0; r < t; r++) n.push(r < e ? null : U);
                        return n
                    }(p, g),
                    v = "function" == typeof h ? h() : h;
                return m[1] = {
                    type: e,
                    blueprint: m,
                    template: n,
                    queries: null,
                    viewQuery: u,
                    declTNode: t,
                    data: m.slice().fill(null, p),
                    bindingStartIndex: p,
                    expandoStartIndex: g,
                    hostBindingOpCodes: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof a ? a() : a,
                    pipeRegistry: "function" == typeof l ? l() : l,
                    firstChild: null,
                    schemas: c,
                    consts: v,
                    incompleteFirstPass: !1
                }
            }

            function Wp(e, t, n, r) {
                const i = tg(t);
                null === n ? i.push(r) : (i.push(n), e.firstCreatePass && ng(e).push(r, i.length - 1))
            }

            function zp(e, t, n) {
                for (let r in e)
                    if (e.hasOwnProperty(r)) {
                        const i = e[r];
                        (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : n[r] = [t, i]
                    } return n
            }

            function Qp(e, t, n, r, i, a) {
                const l = a.hostBindings;
                if (l) {
                    let u = e.hostBindingOpCodes;
                    null === u && (u = e.hostBindingOpCodes = []);
                    const c = ~t.index;
                    (function (e) {
                        let t = e.length;
                        for (; t > 0;) {
                            const n = e[--t];
                            if ("number" == typeof n && n < 0) return n
                        }
                        return 0
                    })(u) != c && u.push(c), u.push(r, i, l)
                }
            }

            function Yp(e, t) {
                null !== e.hostBindings && e.hostBindings(1, t)
            }

            function Kp(e, t) {
                t.flags |= 2, (e.components || (e.components = [])).push(t.index)
            }

            function eD(e, t, n) {
                if (n) {
                    if (t.exportAs)
                        for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
                    Ut(t) && (n[""] = e)
                }
            }

            function Zp(e, t, n) {
                e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
            }

            function Jp(e, t, n, r, i) {
                e.data[r] = i;
                const a = i.factory || (i.factory = ir(i.type)),
                    l = new $i(a, Ut(i), null);
                e.blueprint[r] = l, n[r] = l, Qp(e, t, 0, r, Zr(e, n, i.hostVars, U), i)
            }

            function tD(e, t, n) {
                const r = Mt(t, e),
                    i = Up(n),
                    a = e[10],
                    l = Ks(e, lo(e, i, null, n.onPush ? 64 : 16, r, t, a, a.createRenderer(r, n), null, null));
                e[t.index] = l
            }

            function cn(e, t, n, r, i, a) {
                const l = Mt(e, t);
                ! function (e, t, n, r, i, a, l) {
                    if (null == a) Ce(e) ? e.removeAttribute(t, i, n) : t.removeAttribute(i);
                    else {
                        const u = null == l ? H(a) : l(a, r || "", i);
                        Ce(e) ? e.setAttribute(t, i, u, n) : n ? t.setAttributeNS(n, i, u) : t.setAttribute(i, u)
                    }
                }(t[z], l, a, e.value, n, r, i)
            }

            function nD(e, t, n, r, i, a) {
                const l = a[t];
                if (null !== l) {
                    const u = r.setInput;
                    for (let c = 0; c < l.length;) {
                        const h = l[c++],
                            p = l[c++],
                            g = l[c++];
                        null !== u ? r.setInput(n, g, h, p) : n[p] = g
                    }
                }
            }

            function rD(e, t) {
                let n = null,
                    r = 0;
                for (; r < t.length;) {
                    const i = t[r];
                    if (0 !== i)
                        if (5 !== i) {
                            if ("number" == typeof i) break;
                            e.hasOwnProperty(i) && (null === n && (n = []), n.push(i, e[i], t[r + 1])), r += 2
                        } else r += 2;
                    else r += 4
                }
                return n
            }

            function sD(e, t) {
                const n = Ct(t, e);
                if (Rl(n)) {
                    const r = n[1];
                    80 & n[2] ? Jr(r, n, r.template, n[8]) : n[5] > 0 && Vu(n)
                }
            }

            function Vu(e) {
                for (let r = fu(e); null !== r; r = hu(r))
                    for (let i = 10; i < r.length; i++) {
                        const a = r[i];
                        if (1024 & a[2]) {
                            const l = a[1];
                            Jr(l, a, l.template, a[8])
                        } else a[5] > 0 && Vu(a)
                    }
                const n = e[1].components;
                if (null !== n)
                    for (let r = 0; r < n.length; r++) {
                        const i = Ct(n[r], e);
                        Rl(i) && i[5] > 0 && Vu(i)
                    }
            }

            function aD(e, t) {
                const n = Ct(t, e),
                    r = n[1];
                (function (e, t) {
                    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
                })(r, n), uo(r, n, n[8])
            }

            function Ks(e, t) {
                return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
            }

            function ju(e) {
                for (; e;) {
                    e[2] |= 64;
                    const t = so(e);
                    if (G0(e) && !t) return e;
                    e = t
                }
                return null
            }

            function Hu(e, t, n) {
                const r = t[10];
                r.begin && r.begin();
                try {
                    Jr(e, t, e.template, n)
                } catch (i) {
                    throw ig(t, i), i
                } finally {
                    r.end && r.end()
                }
            }

            function eg(e) {
                ! function (e) {
                    for (let t = 0; t < e.components.length; t++) {
                        const n = e.components[t],
                            r = lu(n),
                            i = r[1];
                        Hw(i, r, i.template, n)
                    }
                }(e[8])
            }

            function Uu(e, t, n) {
                Vl(0), t(e, n)
            }
            const fD = (() => Promise.resolve(null))();

            function tg(e) {
                return e[7] || (e[7] = [])
            }

            function ng(e) {
                return e.cleanup || (e.cleanup = [])
            }

            function ig(e, t) {
                const n = e[9],
                    r = n ? n.get(cr, null) : null;
                r && r.handleError(t)
            }

            function og(e, t, n, r, i) {
                for (let a = 0; a < n.length;) {
                    const l = n[a++],
                        u = n[a++],
                        c = t[l],
                        h = e.data[l];
                    null !== h.setInput ? h.setInput(c, i, r, u) : c[u] = i
                }
            }

            function Zs(e, t, n) {
                let r = n ? e.styles : null,
                    i = n ? e.classes : null,
                    a = 0;
                if (null !== t)
                    for (let l = 0; l < t.length; l++) {
                        const u = t[l];
                        "number" == typeof u ? a = u : 1 == a ? i = vl(i, u) : 2 == a && (r = vl(r, u + ": " + t[++l] + ";"))
                    }
                n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = i : e.classesWithoutHost = i
            }
            const co = new te("INJECTOR", -1);
            class sg {
                get(t, n = Ji) {
                    if (n === Ji) {
                        const r = new Error(`NullInjectorError: No provider for ${Q(t)}!`);
                        throw r.name = "NullInjectorError", r
                    }
                    return n
                }
            }
            const fo = new te("Set Injector scope."),
                ho = {},
                gD = {};
            let $u;

            function ag() {
                return void 0 === $u && ($u = new sg), $u
            }

            function lg(e, t = null, n = null, r) {
                return new vD(e, n, t || ag(), r)
            }
            class vD {
                constructor(t, n, r, i = null) {
                    this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                    const a = [];
                    n && sn(n, u => this.processProvider(u, t, n)), sn([t], u => this.processInjectorType(u, [], a)), this.records.set(co, Xr(void 0, this));
                    const l = this.records.get(fo);
                    this.scope = null != l ? l.value : null, this.source = i || ("object" == typeof t ? null : Q(t))
                }
                get destroyed() {
                    return this._destroyed
                }
                destroy() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach(t => t.ngOnDestroy())
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
                get(t, n = Ji, r = O.Default) {
                    this.assertNotDestroyed();
                    const i = qr(this),
                        a = On(void 0);
                    try {
                        if (!(r & O.SkipSelf)) {
                            let u = this.records.get(t);
                            if (void 0 === u) {
                                const c = function (e) {
                                    return "function" == typeof e || "object" == typeof e && e instanceof te
                                }(t) && Cn(t);
                                u = c && this.injectableDefInScope(c) ? Xr(qu(t), ho) : null, this.records.set(t, u)
                            }
                            if (null != u) return this.hydrate(t, u)
                        }
                        return (r & O.Self ? ag() : this.parent).get(t, n = r & O.Optional && n === Ji ? null : n)
                    } catch (l) {
                        if ("NullInjectorError" === l.name) {
                            if ((l[$r] = l[$r] || []).unshift(Q(t)), i) throw l;
                            return Sh(l, t, "R3InjectorError", this.source)
                        }
                        throw l
                    } finally {
                        On(a), qr(i)
                    }
                }
                _resolveInjectorDefTypes() {
                    this.injectorDefTypes.forEach(t => this.get(t))
                }
                toString() {
                    const t = [];
                    return this.records.forEach((r, i) => t.push(Q(i))), `R3Injector[${t.join(", ")}]`
                }
                assertNotDestroyed() {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
                processInjectorType(t, n, r) {
                    if (!(t = M(t))) return !1;
                    let i = Vf(t);
                    const a = null == i && t.ngModule || void 0,
                        l = void 0 === a ? t : a,
                        u = -1 !== r.indexOf(l);
                    if (void 0 !== a && (i = Vf(a)), null == i) return !1;
                    if (null != i.imports && !u) {
                        let p;
                        r.push(l);
                        try {
                            sn(i.imports, g => {
                                this.processInjectorType(g, n, r) && (void 0 === p && (p = []), p.push(g))
                            })
                        } finally {}
                        if (void 0 !== p)
                            for (let g = 0; g < p.length; g++) {
                                const {
                                    ngModule: m,
                                    providers: v
                                } = p[g];
                                sn(v, y => this.processProvider(y, m, v || se))
                            }
                    }
                    this.injectorDefTypes.add(l);
                    const c = ir(l) || (() => new l);
                    this.records.set(l, Xr(c, ho));
                    const h = i.providers;
                    if (null != h && !u) {
                        const p = t;
                        sn(h, g => this.processProvider(g, p, h))
                    }
                    return void 0 !== a && void 0 !== t.providers
                }
                processProvider(t, n, r) {
                    let i = ei(t = M(t)) ? t : M(t && t.provide);
                    const a = function (e, t, n) {
                        return cg(e) ? Xr(void 0, e.useValue) : Xr(ug(e), ho)
                    }(t);
                    if (ei(t) || !0 !== t.multi) this.records.get(i);
                    else {
                        let l = this.records.get(i);
                        l || (l = Xr(void 0, ho, !0), l.factory = () => lr(l.multi), this.records.set(i, l)), i = t, l.multi.push(t)
                    }
                    this.records.set(i, a)
                }
                hydrate(t, n) {
                    return n.value === ho && (n.value = gD, n.value = n.factory()), "object" == typeof n.value && n.value && function (e) {
                        return null !== e && "object" == typeof e && "function" == typeof e.ngOnDestroy
                    }(n.value) && this.onDestroy.add(n.value), n.value
                }
                injectableDefInScope(t) {
                    if (!t.providedIn) return !1;
                    const n = M(t.providedIn);
                    return "string" == typeof n ? "any" === n || n === this.scope : this.injectorDefTypes.has(n)
                }
            }

            function qu(e) {
                const t = Cn(e),
                    n = null !== t ? t.factory : ir(e);
                if (null !== n) return n;
                if (e instanceof te) throw new Error(`Token ${Q(e)} is missing a \u0275prov definition.`);
                if (e instanceof Function) return function (e) {
                    const t = e.length;
                    if (t > 0) {
                        const r = function (e, t) {
                            const n = [];
                            for (let r = 0; r < e; r++) n.push(t);
                            return n
                        }(t, "?");
                        throw new Error(`Can't resolve all parameters for ${Q(e)}: (${r.join(", ")}).`)
                    }
                    const n = function (e) {
                        const t = e && (e[hs] || e[jf]);
                        if (t) {
                            const n = function (e) {
                                if (e.hasOwnProperty("name")) return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), t
                        }
                        return null
                    }(e);
                    return null !== n ? () => n.factory(e) : () => new e
                }(e);
                throw new Error("unreachable")
            }

            function ug(e, t, n) {
                let r;
                if (ei(e)) {
                    const i = M(e);
                    return ir(i) || qu(i)
                }
                if (cg(e)) r = () => M(e.useValue);
                else if (function (e) {
                        return !(!e || !e.useFactory)
                    }(e)) r = () => e.useFactory(...lr(e.deps || []));
                else if (function (e) {
                        return !(!e || !e.useExisting)
                    }(e)) r = () => R(M(e.useExisting));
                else {
                    const i = M(e && (e.useClass || e.provide));
                    if (! function (e) {
                            return !!e.deps
                        }(e)) return ir(i) || qu(i);
                    r = () => new i(...lr(e.deps))
                }
                return r
            }

            function Xr(e, t, n = !1) {
                return {
                    factory: e,
                    value: t,
                    multi: n ? [] : void 0
                }
            }

            function cg(e) {
                return null !== e && "object" == typeof e && Jl in e
            }

            function ei(e) {
                return "function" == typeof e
            }
            const dg = function (e, t, n) {
                return function (e, t = null, n = null, r) {
                    const i = lg(e, t, n, r);
                    return i._resolveInjectorDefTypes(), i
                }({
                    name: n
                }, t, e, n)
            };
            let ae = (() => {
                class e {
                    static create(n, r) {
                        return Array.isArray(n) ? dg(n, r, "") : dg(n.providers, n.parent, n.name || "")
                    }
                }
                return e.THROW_IF_NOT_FOUND = Ji, e.NULL = new sg, e.\u0275prov = Y({
                    token: e,
                    providedIn: "any",
                    factory: () => R(co)
                }), e.__NG_ELEMENT_ID__ = -1, e
            })();

            function VD(e, t) {
                Is(lu(e)[1], Fe())
            }
            let Js = null;

            function ti() {
                if (!Js) {
                    const e = re.Symbol;
                    if (e && e.iterator) Js = e.iterator;
                    else {
                        const t = Object.getOwnPropertyNames(Map.prototype);
                        for (let n = 0; n < t.length; ++n) {
                            const r = t[n];
                            "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Js = r)
                        }
                    }
                }
                return Js
            }

            function go(e) {
                return !!Zu(e) && (Array.isArray(e) || !(e instanceof Map) && ti() in e)
            }

            function Zu(e) {
                return null !== e && ("function" == typeof e || "object" == typeof e)
            }

            function Je(e, t, n) {
                return !Object.is(e[t], n) && (e[t] = n, !0)
            }

            function Ju(e, t, n, r) {
                const i = D();
                return Je(i, Pr(), t) && (ee(), cn(_e(), i, e, t, n, r)), Ju
            }

            function F(e, t = O.Default) {
                const n = D();
                return null === n ? R(e, t) : Ch(Fe(), n, M(e), t)
            }

            function rc() {
                throw new Error("invalid")
            }

            function x(e, t, n) {
                const r = D();
                return Je(r, Pr(), t) && function (e, t, n, r, i, a, l, u) {
                    const c = Mt(t, n);
                    let p, h = t.inputs;
                    !u && null != h && (p = h[r]) ? (og(e, n, p, r, i), ys(t) && function (e, t) {
                        const n = Ct(t, e);
                        16 & n[2] || (n[2] |= 64)
                    }(n, t.index)) : 3 & t.type && (r = function (e) {
                        return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
                    }(r), i = null != l ? l(i, t.value || "", r) : i, Ce(a) ? a.setProperty(c, r, i) : Hl(r) || (c.setProperty ? c.setProperty(r, i) : c[r] = i))
                }(ee(), _e(), r, e, t, r[z], n, !1), x
            }

            function ic(e, t, n, r, i) {
                const l = i ? "class" : "style";
                og(e, n, t.inputs[l], l, r)
            }

            function o(e, t, n, r) {
                const i = D(),
                    a = ee(),
                    l = 20 + e,
                    u = i[z],
                    c = i[l] = gu(u, t, V.lFrame.currentNamespace),
                    h = a.firstCreatePass ? function (e, t, n, r, i, a, l) {
                        const u = t.consts,
                            h = Kr(t, e, 2, i, Ln(u, a));
                        return function (e, t, n, r) {
                            let i = !1;
                            if (nh()) {
                                const a = function (e, t, n) {
                                        const r = e.directiveRegistry;
                                        let i = null;
                                        if (r)
                                            for (let a = 0; a < r.length; a++) {
                                                const l = r[a];
                                                Ap(n, l.selectors, !1) && (i || (i = []), Rs(Wi(n, t), e, l.type), Ut(l) ? (Kp(e, n), i.unshift(l)) : i.push(l))
                                            }
                                        return i
                                    }(e, t, n),
                                    l = null === r ? null : {
                                        "": -1
                                    };
                                if (null !== a) {
                                    i = !0, Zp(n, e.data.length, a.length);
                                    for (let p = 0; p < a.length; p++) {
                                        const g = a[p];
                                        g.providersResolver && g.providersResolver(g)
                                    }
                                    let u = !1,
                                        c = !1,
                                        h = Zr(e, t, a.length, null);
                                    for (let p = 0; p < a.length; p++) {
                                        const g = a[p];
                                        n.mergedAttrs = Ts(n.mergedAttrs, g.hostAttrs), Jp(e, n, t, h, g), eD(h, g, l), null !== g.contentQueries && (n.flags |= 8), (null !== g.hostBindings || null !== g.hostAttrs || 0 !== g.hostVars) && (n.flags |= 128);
                                        const m = g.type.prototype;
                                        !u && (m.ngOnChanges || m.ngOnInit || m.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), u = !0), !c && (m.ngOnChanges || m.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), c = !0), h++
                                    }! function (e, t) {
                                        const r = t.directiveEnd,
                                            i = e.data,
                                            a = t.attrs,
                                            l = [];
                                        let u = null,
                                            c = null;
                                        for (let h = t.directiveStart; h < r; h++) {
                                            const p = i[h],
                                                g = p.inputs,
                                                m = null === a || Ip(t) ? null : rD(g, a);
                                            l.push(m), u = zp(g, h, u), c = zp(p.outputs, h, c)
                                        }
                                        null !== u && (u.hasOwnProperty("class") && (t.flags |= 16), u.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = l, t.inputs = u, t.outputs = c
                                    }(e, n)
                                }
                                l && function (e, t, n) {
                                    if (t) {
                                        const r = e.localNames = [];
                                        for (let i = 0; i < t.length; i += 2) {
                                            const a = n[t[i + 1]];
                                            if (null == a) throw new Jn("301", `Export of name '${t[i+1]}' not found!`);
                                            r.push(t[i], a)
                                        }
                                    }
                                }(n, r, l)
                            }
                            n.mergedAttrs = Ts(n.mergedAttrs, n.attrs)
                        }(t, n, h, Ln(u, l)), null !== h.attrs && Zs(h, h.attrs, !1), null !== h.mergedAttrs && Zs(h, h.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, h), h
                    }(l, a, i, 0, t, n, r) : a.data[l];
                on(h, !0);
                const p = h.mergedAttrs;
                null !== p && Ss(u, c, p);
                const g = h.classes;
                null !== g && _u(u, c, g);
                const m = h.styles;
                null !== m && wp(u, c, m), 64 != (64 & h.flags) && qs(a, i, c, h), 0 === V.lFrame.elementDepthCount && Ze(c, i), V.lFrame.elementDepthCount++, bs(h) && (function (e, t, n) {
                    !nh() || (function (e, t, n, r) {
                        const i = n.directiveStart,
                            a = n.directiveEnd;
                        e.firstCreatePass || Wi(n, t), Ze(r, t);
                        const l = n.initialInputs;
                        for (let u = i; u < a; u++) {
                            const c = e.data[u],
                                h = Ut(c);
                            h && tD(t, n, c);
                            const p = zi(t, e, u, n);
                            Ze(p, t), null !== l && nD(0, u - i, p, c, 0, l), h && (Ct(n.index, t)[8] = p)
                        }
                    }(e, t, n, Mt(n, t)), 128 == (128 & n.flags) && function (e, t, n) {
                        const r = n.directiveStart,
                            i = n.directiveEnd,
                            l = n.index,
                            u = V.lFrame.currentDirectiveIndex;
                        try {
                            Vn(l);
                            for (let c = r; c < i; c++) {
                                const h = e.data[c],
                                    p = t[c];
                                Nl(c), (null !== h.hostBindings || 0 !== h.hostVars || null !== h.hostAttrs) && Yp(h, p)
                            }
                        } finally {
                            Vn(-1), Nl(u)
                        }
                    }(e, t, n))
                }(a, i, h), function (e, t, n) {
                    if (Al(t)) {
                        const i = t.directiveEnd;
                        for (let a = t.directiveStart; a < i; a++) {
                            const l = e.data[a];
                            l.contentQueries && l.contentQueries(1, n[a], a)
                        }
                    }
                }(a, h, i)), null !== r && function (e, t, n = Mt) {
                    const r = t.localNames;
                    if (null !== r) {
                        let i = t.index + 1;
                        for (let a = 0; a < r.length; a += 2) {
                            const l = r[a + 1],
                                u = -1 === l ? n(t, e) : e[l];
                            e[i++] = u
                        }
                    }
                }(i, h)
            }

            function s() {
                let e = Fe();
                Ol() ? V.lFrame.isParent = !1 : (e = e.parent, on(e, !1));
                const t = e;
                V.lFrame.elementDepthCount--;
                const n = ee();
                n.firstCreatePass && (Is(n, e), Al(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function (e) {
                    return 0 != (16 & e.flags)
                }(t) && ic(n, t, D(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function (e) {
                    return 0 != (32 & e.flags)
                }(t) && ic(n, t, D(), t.stylesWithoutHost, !1)
            }

            function f(e, t, n, r) {
                o(e, t, n, r), s()
            }

            function ta(e) {
                return !!e && "function" == typeof e.then
            }
            const oc = function (e) {
                return !!e && "function" == typeof e.subscribe
            };

            function na(e, t, n, r) {
                const i = D(),
                    a = ee(),
                    l = Fe();
                return function (e, t, n, r, i, a, l, u) {
                    const c = bs(r),
                        p = e.firstCreatePass && ng(e),
                        g = t[8],
                        m = tg(t);
                    let v = !0;
                    if (3 & r.type || u) {
                        const b = Mt(r, t),
                            w = u ? u(b) : b,
                            _ = m.length,
                            A = u ? k => u(Te(k[r.index])) : r.index;
                        if (Ce(n)) {
                            let k = null;
                            if (!u && c && (k = function (e, t, n, r) {
                                    const i = e.cleanup;
                                    if (null != i)
                                        for (let a = 0; a < i.length - 1; a += 2) {
                                            const l = i[a];
                                            if (l === n && i[a + 1] === r) {
                                                const u = t[7],
                                                    c = i[a + 2];
                                                return u.length > c ? u[c] : null
                                            }
                                            "string" == typeof l && (a += 2)
                                        }
                                    return null
                                }(e, t, i, r.index)), null !== k)(k.__ngLastListenerFn__ || k).__ngNextListenerFn__ = a, k.__ngLastListenerFn__ = a, v = !1;
                            else {
                                a = sc(r, t, g, a, !1);
                                const W = n.listen(w, i, a);
                                m.push(a, W), p && p.push(i, A, _, _ + 1)
                            }
                        } else a = sc(r, t, g, a, !0), w.addEventListener(i, a, l), m.push(a), p && p.push(i, A, _, l)
                    } else a = sc(r, t, g, a, !1);
                    const y = r.outputs;
                    let C;
                    if (v && null !== y && (C = y[i])) {
                        const b = C.length;
                        if (b)
                            for (let w = 0; w < b; w += 2) {
                                const Le = t[C[w]][C[w + 1]].subscribe(a),
                                    jt = m.length;
                                m.push(a, Le), p && p.push(i, r.index, jt, -(jt + 1))
                            }
                    }
                }(a, i, i[z], l, e, t, !!n, r), na
            }

            function tm(e, t, n, r) {
                try {
                    return !1 !== n(r)
                } catch (i) {
                    return ig(e, i), !1
                }
            }

            function sc(e, t, n, r, i) {
                return function a(l) {
                    if (l === Function) return r;
                    const u = 2 & e.flags ? Ct(e.index, t) : t;
                    0 == (32 & t[2]) && ju(u);
                    let c = tm(t, 0, r, l),
                        h = a.__ngNextListenerFn__;
                    for (; h;) c = tm(t, 0, h, l) && c, h = h.__ngNextListenerFn__;
                    return i && !1 === c && (l.preventDefault(), l.returnValue = !1), c
                }
            }

            function d(e, t = "") {
                const n = D(),
                    r = ee(),
                    i = e + 20,
                    a = r.firstCreatePass ? Kr(r, i, 1, t, null) : r.data[i],
                    l = n[i] = function (e, t) {
                        return Ce(e) ? e.createText(t) : e.createTextNode(t)
                    }(n[z], t);
                qs(r, n, l, a), on(a, !1)
            }
            const hr = void 0;
            var fE = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], hr
                ],
                [
                    ["AM", "PM"], hr, hr
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], hr, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], hr, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", hr, "{1} 'at' {0}", hr],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                function (e) {
                    const n = Math.floor(Math.abs(e)),
                        r = e.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === n && 0 === r ? 1 : 5
                }
            ];
            let hi = {};

            function Gm(e) {
                return e in hi || (hi[e] = re.ng && re.ng.common && re.ng.common.locales && re.ng.common.locales[e]), hi[e]
            }
            var I = (() => ((I = I || {})[I.LocaleId = 0] = "LocaleId", I[I.DayPeriodsFormat = 1] = "DayPeriodsFormat", I[I.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", I[I.DaysFormat = 3] = "DaysFormat", I[I.DaysStandalone = 4] = "DaysStandalone", I[I.MonthsFormat = 5] = "MonthsFormat", I[I.MonthsStandalone = 6] = "MonthsStandalone", I[I.Eras = 7] = "Eras", I[I.FirstDayOfWeek = 8] = "FirstDayOfWeek", I[I.WeekendRange = 9] = "WeekendRange", I[I.DateFormat = 10] = "DateFormat", I[I.TimeFormat = 11] = "TimeFormat", I[I.DateTimeFormat = 12] = "DateTimeFormat", I[I.NumberSymbols = 13] = "NumberSymbols", I[I.NumberFormats = 14] = "NumberFormats", I[I.CurrencyCode = 15] = "CurrencyCode", I[I.CurrencySymbol = 16] = "CurrencySymbol", I[I.CurrencyName = 17] = "CurrencyName", I[I.Currencies = 18] = "Currencies", I[I.Directionality = 19] = "Directionality", I[I.PluralCase = 20] = "PluralCase", I[I.ExtraData = 21] = "ExtraData", I))();
            const ia = "en-US";
            let Qm = ia;

            function fc(e, t, n, r, i) {
                if (e = M(e), Array.isArray(e))
                    for (let a = 0; a < e.length; a++) fc(e[a], t, n, r, i);
                else {
                    const a = ee(),
                        l = D();
                    let u = ei(e) ? e : M(e.provide),
                        c = ug(e);
                    const h = Fe(),
                        p = 1048575 & h.providerIndexes,
                        g = h.directiveStart,
                        m = h.providerIndexes >> 20;
                    if (ei(e) || !e.multi) {
                        const v = new $i(c, i, F),
                            y = pc(u, t, i ? p : p + m, g); - 1 === y ? (Rs(Wi(h, l), a, u), hc(a, e, t.length), t.push(u), h.directiveStart++, h.directiveEnd++, i && (h.providerIndexes += 1048576), n.push(v), l.push(v)) : (n[y] = v, l[y] = v)
                    } else {
                        const v = pc(u, t, p + m, g),
                            y = pc(u, t, p, p + m),
                            C = v >= 0 && n[v],
                            b = y >= 0 && n[y];
                        if (i && !b || !i && !C) {
                            Rs(Wi(h, l), a, u);
                            const w = function (e, t, n, r, i) {
                                const a = new $i(e, n, F);
                                return a.multi = [], a.index = t, a.componentProviders = 0, y1(a, i, r && !n), a
                            }(i ? c3 : u3, n.length, i, r, c);
                            !i && b && (n[y].providerFactory = w), hc(a, e, t.length, 0), t.push(u), h.directiveStart++, h.directiveEnd++, i && (h.providerIndexes += 1048576), n.push(w), l.push(w)
                        } else hc(a, e, v > -1 ? v : y, y1(n[i ? y : v], c, !i && r));
                        !i && r && b && n[y].componentProviders++
                    }
                }
            }

            function hc(e, t, n, r) {
                const i = ei(t);
                if (i || function (e) {
                        return !!e.useClass
                    }(t)) {
                    const l = (t.useClass || t).prototype.ngOnDestroy;
                    if (l) {
                        const u = e.destroyHooks || (e.destroyHooks = []);
                        if (!i && t.multi) {
                            const c = u.indexOf(n); - 1 === c ? u.push(n, [r, l]) : u[c + 1].push(r, l)
                        } else u.push(n, l)
                    }
                }
            }

            function y1(e, t, n) {
                return n && e.componentProviders++, e.multi.push(t) - 1
            }

            function pc(e, t, n, r) {
                for (let i = n; i < r; i++)
                    if (t[i] === e) return i;
                return -1
            }

            function u3(e, t, n, r) {
                return gc(this.multi, [])
            }

            function c3(e, t, n, r) {
                const i = this.multi;
                let a;
                if (this.providerFactory) {
                    const l = this.providerFactory.componentProviders,
                        u = zi(n, n[1], this.providerFactory.index, r);
                    a = u.slice(0, l), gc(i, a);
                    for (let c = l; c < u.length; c++) a.push(u[c])
                } else a = [], gc(i, a);
                return a
            }

            function gc(e, t) {
                for (let n = 0; n < e.length; n++) t.push((0, e[n])());
                return t
            }

            function b1(e, t = []) {
                return n => {
                    n.providersResolver = (r, i) => function (e, t, n) {
                        const r = ee();
                        if (r.firstCreatePass) {
                            const i = Ut(e);
                            fc(n, r.data, r.blueprint, i, !0), fc(t, r.data, r.blueprint, i, !1)
                        }
                    }(r, i ? i(e) : e, t)
                }
            }
            class C1 {}
            const w1 = "ngComponent";
            class h3 {
                resolveComponentFactory(t) {
                    throw function (e) {
                        const t = Error(`No component factory found for ${Q(e)}. Did you add it to @NgModule.entryComponents?`);
                        return t[w1] = e, t
                    }(t)
                }
            }
            let pr = (() => {
                class e {}
                return e.NULL = new h3, e
            })();

            function ua(...e) {}

            function gi(e, t) {
                return new It(Mt(e, t))
            }
            const m3 = function () {
                return gi(Fe(), D())
            };
            let It = (() => {
                class e {
                    constructor(n) {
                        this.nativeElement = n
                    }
                }
                return e.__NG_ELEMENT_ID__ = m3, e
            })();

            function D1(e) {
                return e instanceof It ? e.nativeElement : e
            }
            class ca {}
            let da = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => y3(), e
            })();
            const y3 = function () {
                const e = D(),
                    n = Ct(Fe().index, e);
                return function (e) {
                    return e[z]
                }(rn(n) ? n : e)
            };
            let vc = (() => {
                class e {}
                return e.\u0275prov = Y({
                    token: e,
                    providedIn: "root",
                    factory: () => null
                }), e
            })();
            class fa {
                constructor(t) {
                    this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                }
            }
            const E1 = new fa("13.0.2"),
                mi = {};

            function ha(e, t, n, r, i = !1) {
                for (; null !== n;) {
                    const a = t[n.index];
                    if (null !== a && r.push(Te(a)), Ht(a))
                        for (let u = 10; u < a.length; u++) {
                            const c = a[u],
                                h = c[1].firstChild;
                            null !== h && ha(c[1], c, h, r)
                        }
                    const l = n.type;
                    if (8 & l) ha(e, t, n.child, r);
                    else if (32 & l) {
                        const u = du(n, t);
                        let c;
                        for (; c = u();) r.push(c)
                    } else if (16 & l) {
                        const u = bp(t, n);
                        if (Array.isArray(u)) r.push(...u);
                        else {
                            const c = so(t[16]);
                            ha(c[1], c, u, r, !0)
                        }
                    }
                    n = i ? n.projectionNext : n.next
                }
                return r
            }
            class wo {
                constructor(t, n) {
                    this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1
                }
                get rootNodes() {
                    const t = this._lView,
                        n = t[1];
                    return ha(n, t, n.firstChild, [])
                }
                get context() {
                    return this._lView[8]
                }
                set context(t) {
                    this._lView[8] = t
                }
                get destroyed() {
                    return 256 == (256 & this._lView[2])
                }
                destroy() {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._attachedToViewContainer) {
                        const t = this._lView[3];
                        if (Ht(t)) {
                            const n = t[8],
                                r = n ? n.indexOf(this) : -1;
                            r > -1 && (mu(t, r), ar(n, r))
                        }
                        this._attachedToViewContainer = !1
                    }
                    cp(this._lView[1], this._lView)
                }
                onDestroy(t) {
                    Wp(this._lView[1], this._lView, null, t)
                }
                markForCheck() {
                    ju(this._cdRefInjectingView || this._lView)
                }
                detach() {
                    this._lView[2] &= -129
                }
                reattach() {
                    this._lView[2] |= 128
                }
                detectChanges() {
                    Hu(this._lView[1], this._lView, this.context)
                }
                checkNoChanges() {
                    ! function (e, t, n) {
                        ws(!0);
                        try {
                            Hu(e, t, n)
                        } finally {
                            ws(!1)
                        }
                    }(this._lView[1], this._lView, this.context)
                }
                attachToViewContainerRef() {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._attachedToViewContainer = !0
                }
                detachFromAppRef() {
                    this._appRef = null,
                        function (e, t) {
                            ao(e, t, t[z], 2, null, null)
                        }(this._lView[1], this._lView)
                }
                attachToAppRef(t) {
                    if (this._attachedToViewContainer) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }
            }
            class _3 extends wo {
                constructor(t) {
                    super(t), this._view = t
                }
                detectChanges() {
                    eg(this._view)
                }
                checkNoChanges() {
                    ! function (e) {
                        ws(!0);
                        try {
                            eg(e)
                        } finally {
                            ws(!1)
                        }
                    }(this._view)
                }
                get context() {
                    return null
                }
            }
            class I1 extends pr {
                constructor(t) {
                    super(), this.ngModule = t
                }
                resolveComponentFactory(t) {
                    const n = Ye(t);
                    return new yc(n, this.ngModule)
                }
            }

            function A1(e) {
                const t = [];
                for (let n in e) e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
                return t
            }
            const D3 = new te("SCHEDULER_TOKEN", {
                providedIn: "root",
                factory: () => np
            });
            class yc extends C1 {
                constructor(t, n) {
                    super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = function (e) {
                        return e.map(Iw).join(",")
                    }(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n
                }
                get inputs() {
                    return A1(this.componentDef.inputs)
                }
                get outputs() {
                    return A1(this.componentDef.outputs)
                }
                create(t, n, r, i) {
                    const a = (i = i || this.ngModule) ? function (e, t) {
                            return {
                                get: (n, r, i) => {
                                    const a = e.get(n, mi, i);
                                    return a !== mi || r === mi ? a : t.get(n, r, i)
                                }
                            }
                        }(t, i.injector) : t,
                        l = a.get(ca, Xf),
                        u = a.get(vc, null),
                        c = l.createRenderer(null, this.componentDef),
                        h = this.componentDef.selectors[0][0] || "div",
                        p = r ? function (e, t, n) {
                            if (Ce(e)) return e.selectRootElement(t, n === yt.ShadowDom);
                            let r = "string" == typeof t ? e.querySelector(t) : t;
                            return r.textContent = "", r
                        }(c, r, this.componentDef.encapsulation) : gu(l.createRenderer(null, this.componentDef), h, function (e) {
                            const t = e.toLowerCase();
                            return "svg" === t ? "http://www.w3.org/2000/svg" : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                        }(h)),
                        g = this.componentDef.onPush ? 576 : 528,
                        m = function (e, t) {
                            return {
                                components: [],
                                scheduler: e || np,
                                clean: fD,
                                playerHandler: t || null,
                                flags: 0
                            }
                        }(),
                        v = Ys(0, null, null, 1, 0, null, null, null, null, null),
                        y = lo(null, v, m, g, null, null, l, c, u, a);
                    let C, b;
                    Ds(y);
                    try {
                        const w = function (e, t, n, r, i, a) {
                            const l = n[1];
                            n[20] = e;
                            const c = Kr(l, 20, 2, "#host", null),
                                h = c.mergedAttrs = t.hostAttrs;
                            null !== h && (Zs(c, h, !0), null !== e && (Ss(i, e, h), null !== c.classes && _u(i, e, c.classes), null !== c.styles && wp(i, e, c.styles)));
                            const p = r.createRenderer(e, t),
                                g = lo(n, Up(t), null, t.onPush ? 64 : 16, n[20], c, r, p, a || null, null);
                            return l.firstCreatePass && (Rs(Wi(c, n), l, t.type), Kp(l, c), Zp(c, n.length, 1)), Ks(n, g), n[20] = g
                        }(p, this.componentDef, y, l, c);
                        if (p)
                            if (r) Ss(c, p, ["ng-version", E1.full]);
                            else {
                                const {
                                    attrs: _,
                                    classes: A
                                } = function (e) {
                                    const t = [],
                                        n = [];
                                    let r = 1,
                                        i = 2;
                                    for (; r < e.length;) {
                                        let a = e[r];
                                        if ("string" == typeof a) 2 === i ? "" !== a && t.push(a, e[++r]) : 8 === i && n.push(a);
                                        else {
                                            if (!$t(i)) break;
                                            i = a
                                        }
                                        r++
                                    }
                                    return {
                                        attrs: t,
                                        classes: n
                                    }
                                }(this.componentDef.selectors[0]);
                                _ && Ss(c, p, _), A && A.length > 0 && _u(c, p, A.join(" "))
                            } if (b = Ml(v, 20), void 0 !== n) {
                            const _ = b.projection = [];
                            for (let A = 0; A < this.ngContentSelectors.length; A++) {
                                const k = n[A];
                                _.push(null != k ? Array.from(k) : null)
                            }
                        }
                        C = function (e, t, n, r, i) {
                            const a = n[1],
                                l = function (e, t, n) {
                                    const r = Fe();
                                    e.firstCreatePass && (n.providersResolver && n.providersResolver(n), Jp(e, r, t, Zr(e, t, 1, null), n));
                                    const i = zi(t, e, r.directiveStart, r);
                                    Ze(i, t);
                                    const a = Mt(r, t);
                                    return a && Ze(a, t), i
                                }(a, n, t);
                            if (r.components.push(l), e[8] = l, i && i.forEach(c => c(l, t)), t.contentQueries) {
                                const c = Fe();
                                t.contentQueries(1, l, c.directiveStart)
                            }
                            const u = Fe();
                            return !a.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (Vn(u.index), Qp(n[1], u, 0, u.directiveStart, u.directiveEnd, t), Yp(t, l)), l
                        }(w, this.componentDef, y, m, [VD]), uo(v, y, null)
                    } finally {
                        Es()
                    }
                    return new A3(this.componentType, C, gi(b, y), y, b)
                }
            }
            class A3 extends class {} {
                constructor(t, n, r, i, a) {
                    super(), this.location = r, this._rootLView = i, this._tNode = a, this.instance = n, this.hostView = this.changeDetectorRef = new _3(i), this.componentType = t
                }
                get injector() {
                    return new Vr(this._tNode, this._rootLView)
                }
                destroy() {
                    this.hostView.destroy()
                }
                onDestroy(t) {
                    this.hostView.onDestroy(t)
                }
            }
            class pn {}
            class x1 {}
            const vi = new Map;
            class T1 extends pn {
                constructor(t, n) {
                    super(), this._parent = n, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new I1(this);
                    const r = St(t);
                    this._bootstrapComponents = un(r.bootstrap), this._r3Injector = lg(t, n, [{
                        provide: pn,
                        useValue: this
                    }, {
                        provide: pr,
                        useValue: this.componentFactoryResolver
                    }], Q(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
                }
                get(t, n = ae.THROW_IF_NOT_FOUND, r = O.Default) {
                    return t === ae || t === pn || t === co ? this : this._r3Injector.get(t, n, r)
                }
                destroy() {
                    const t = this._r3Injector;
                    !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
                }
                onDestroy(t) {
                    this.destroyCbs.push(t)
                }
            }
            class Cc extends x1 {
                constructor(t) {
                    super(), this.moduleType = t, null !== St(t) && function (e) {
                        const t = new Set;
                        ! function n(r) {
                            const i = St(r, !0),
                                a = i.id;
                            null !== a && (function (e, t, n) {
                                if (t && t !== n) throw new Error(`Duplicate module registered for ${e} - ${Q(t)} vs ${Q(t.name)}`)
                            }(a, vi.get(a), r), vi.set(a, r));
                            const l = un(i.imports);
                            for (const u of l) t.has(u) || (t.add(u), n(u))
                        }(e)
                    }(t)
                }
                create(t) {
                    return new T1(this.moduleType, t)
                }
            }

            function T(e, t, n) {
                const r = function () {
                        const e = V.lFrame;
                        let t = e.bindingRootIndex;
                        return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
                    }() + e,
                    i = D();
                return i[r] === U ? function (e, t, n) {
                    return e[t] = n
                }(i, r, n ? t.call(n) : t()) : function (e, t) {
                    return e[t]
                }(i, r)
            }

            function _c(e) {
                return t => {
                    setTimeout(e, void 0, t)
                }
            }
            const st = class extends vn {
                constructor(t = !1) {
                    super(), this.__isAsync = t
                }
                emit(t) {
                    super.next(t)
                }
                subscribe(t, n, r) {
                    var c, h, p;
                    let i = t,
                        a = n || (() => null),
                        l = r;
                    if (t && "object" == typeof t) {
                        const g = t;
                        i = null == (c = g.next) ? void 0 : c.bind(g), a = null == (h = g.error) ? void 0 : h.bind(g), l = null == (p = g.complete) ? void 0 : p.bind(g)
                    }
                    this.__isAsync && (a = _c(a), i && (i = _c(i)), l && (l = _c(l)));
                    const u = super.subscribe({
                        next: i,
                        error: a,
                        complete: l
                    });
                    return t instanceof ye && t.add(u), u
                }
            };

            function z3() {
                return this._results[ti()]()
            }
            class pa {
                constructor(t = !1) {
                    this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
                    const n = ti(),
                        r = pa.prototype;
                    r[n] || (r[n] = z3)
                }
                get changes() {
                    return this._changes || (this._changes = new st)
                }
                get(t) {
                    return this._results[t]
                }
                map(t) {
                    return this._results.map(t)
                }
                filter(t) {
                    return this._results.filter(t)
                }
                find(t) {
                    return this._results.find(t)
                }
                reduce(t, n) {
                    return this._results.reduce(t, n)
                }
                forEach(t) {
                    this._results.forEach(t)
                }
                some(t) {
                    return this._results.some(t)
                }
                toArray() {
                    return this._results.slice()
                }
                toString() {
                    return this._results.toString()
                }
                reset(t, n) {
                    const r = this;
                    r.dirty = !1;
                    const i = Rt(t);
                    (this._changesDetected = ! function (e, t, n) {
                        if (e.length !== t.length) return !1;
                        for (let r = 0; r < e.length; r++) {
                            let i = e[r],
                                a = t[r];
                            if (n && (i = n(i), a = n(a)), a !== i) return !1
                        }
                        return !0
                    }(r._results, i, n)) && (r._results = i, r.length = i.length, r.last = i[this.length - 1], r.first = i[0])
                }
                notifyOnChanges() {
                    this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
                }
                setDirty() {
                    this.dirty = !0
                }
                destroy() {
                    this.changes.complete(), this.changes.unsubscribe()
                }
            }
            Symbol;
            const Q3 = function () {
                return ga(Fe(), D())
            };
            let xn = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = Q3, e
            })();
            const Y3 = xn,
                K3 = class extends Y3 {
                    constructor(t, n, r) {
                        super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = r
                    }
                    createEmbeddedView(t) {
                        const n = this._declarationTContainer.tViews,
                            r = lo(this._declarationLView, n, t, 16, null, n.declTNode, null, null, null, null);
                        r[17] = this._declarationLView[this._declarationTContainer.index];
                        const a = this._declarationLView[19];
                        return null !== a && (r[19] = a.createEmbeddedView(n)), uo(n, r, t), new wo(r)
                    }
                };

            function ga(e, t) {
                return 4 & e.type ? new K3(t, e, gi(e, t)) : null
            }
            const X3 = function () {
                return L1(Fe(), D())
            };
            let Qt = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = X3, e
            })();
            const tI = Qt,
                P1 = class extends tI {
                    constructor(t, n, r) {
                        super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r
                    }
                    get element() {
                        return gi(this._hostTNode, this._hostLView)
                    }
                    get injector() {
                        return new Vr(this._hostTNode, this._hostLView)
                    }
                    get parentInjector() {
                        const t = Ms(this._hostTNode, this._hostLView);
                        if (gh(t)) {
                            const n = Lr(t, this._hostLView),
                                r = Nr(t);
                            return new Vr(n[1].data[r + 8], n)
                        }
                        return new Vr(null, this._hostLView)
                    }
                    clear() {
                        for (; this.length > 0;) this.remove(this.length - 1)
                    }
                    get(t) {
                        const n = N1(this._lContainer);
                        return null !== n && n[t] || null
                    }
                    get length() {
                        return this._lContainer.length - 10
                    }
                    createEmbeddedView(t, n, r) {
                        const i = t.createEmbeddedView(n || {});
                        return this.insert(i, r), i
                    }
                    createComponent(t, n, r, i, a) {
                        const l = t && ! function (e) {
                            return "function" == typeof e
                        }(t);
                        let u;
                        if (l) u = n;
                        else {
                            const g = n || {};
                            u = g.index, r = g.injector, i = g.projectableNodes, a = g.ngModuleRef
                        }
                        const c = l ? t : new yc(Ye(t)),
                            h = r || this.parentInjector;
                        if (!a && null == c.ngModule && h) {
                            const g = h.get(pn, null);
                            g && (a = g)
                        }
                        const p = c.create(h, i, void 0, a);
                        return this.insert(p.hostView, u), p
                    }
                    insert(t, n) {
                        const r = t._lView,
                            i = r[1];
                        if (function (e) {
                                return Ht(e[3])
                            }(r)) {
                            const p = this.indexOf(t);
                            if (-1 !== p) this.detach(p);
                            else {
                                const g = r[3],
                                    m = new P1(g, g[6], g[3]);
                                m.detach(m.indexOf(t))
                            }
                        }
                        const a = this._adjustIndex(n),
                            l = this._lContainer;
                        ! function (e, t, n, r) {
                            const i = 10 + r,
                                a = n.length;
                            r > 0 && (n[i - 1][4] = t), r < a - 10 ? (t[4] = n[i], Os(n, 10 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                            const l = t[17];
                            null !== l && n !== l && function (e, t) {
                                const n = e[9];
                                t[16] !== t[3][3][16] && (e[2] = !0), null === n ? e[9] = [t] : n.push(t)
                            }(l, t);
                            const u = t[19];
                            null !== u && u.insertView(e), t[2] |= 128
                        }(i, r, l, a);
                        const u = bu(a, l),
                            c = r[z],
                            h = $s(c, l[7]);
                        return null !== h && function (e, t, n, r, i, a) {
                            r[0] = i, r[6] = t, ao(e, r, n, 1, i, a)
                        }(i, l[6], c, r, h, u), t.attachToViewContainerRef(), Os(wc(l), a, t), t
                    }
                    move(t, n) {
                        return this.insert(t, n)
                    }
                    indexOf(t) {
                        const n = N1(this._lContainer);
                        return null !== n ? n.indexOf(t) : -1
                    }
                    remove(t) {
                        const n = this._adjustIndex(t, -1),
                            r = mu(this._lContainer, n);
                        r && (ar(wc(this._lContainer), n), cp(r[1], r))
                    }
                    detach(t) {
                        const n = this._adjustIndex(t, -1),
                            r = mu(this._lContainer, n);
                        return r && null != ar(wc(this._lContainer), n) ? new wo(r) : null
                    }
                    _adjustIndex(t, n = 0) {
                        return null == t ? this.length + n : t
                    }
                };

            function N1(e) {
                return e[8]
            }

            function wc(e) {
                return e[8] || (e[8] = [])
            }

            function L1(e, t) {
                let n;
                const r = t[e.index];
                if (Ht(r)) n = r;
                else {
                    let i;
                    if (8 & e.type) i = Te(r);
                    else {
                        const a = t[z];
                        i = a.createComment("");
                        const l = Mt(e, t);
                        dr(a, $s(a, l), i, function (e, t) {
                            return Ce(e) ? e.nextSibling(t) : t.nextSibling
                        }(a, l), !1)
                    }
                    t[e.index] = n = function (e, t, n, r) {
                        return new Array(e, !0, !1, t, null, 0, r, n, null, null)
                    }(r, t, i, e), Ks(t, n)
                }
                return new P1(n, e, t)
            }
            class Dc {
                constructor(t) {
                    this.queryList = t, this.matches = null
                }
                clone() {
                    return new Dc(this.queryList)
                }
                setDirty() {
                    this.queryList.setDirty()
                }
            }
            class Ec {
                constructor(t = []) {
                    this.queries = t
                }
                createEmbeddedView(t) {
                    const n = t.queries;
                    if (null !== n) {
                        const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
                            i = [];
                        for (let a = 0; a < r; a++) {
                            const l = n.getByIndex(a);
                            i.push(this.queries[l.indexInDeclarationView].clone())
                        }
                        return new Ec(i)
                    }
                    return null
                }
                insertView(t) {
                    this.dirtyQueriesWithMatches(t)
                }
                detachView(t) {
                    this.dirtyQueriesWithMatches(t)
                }
                dirtyQueriesWithMatches(t) {
                    for (let n = 0; n < this.queries.length; n++) null !== U1(t, n).matches && this.queries[n].setDirty()
                }
            }
            class V1 {
                constructor(t, n, r = null) {
                    this.predicate = t, this.flags = n, this.read = r
                }
            }
            class Ic {
                constructor(t = []) {
                    this.queries = t
                }
                elementStart(t, n) {
                    for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n)
                }
                elementEnd(t) {
                    for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t)
                }
                embeddedTView(t) {
                    let n = null;
                    for (let r = 0; r < this.length; r++) {
                        const i = null !== n ? n.length : 0,
                            a = this.getByIndex(r).embeddedTView(t, i);
                        a && (a.indexInDeclarationView = r, null !== n ? n.push(a) : n = [a])
                    }
                    return null !== n ? new Ic(n) : null
                }
                template(t, n) {
                    for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n)
                }
                getByIndex(t) {
                    return this.queries[t]
                }
                get length() {
                    return this.queries.length
                }
                track(t) {
                    this.queries.push(t)
                }
            }
            class Ac {
                constructor(t, n = -1) {
                    this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
                }
                elementStart(t, n) {
                    this.isApplyingToNode(n) && this.matchTNode(t, n)
                }
                elementEnd(t) {
                    this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
                }
                template(t, n) {
                    this.elementStart(t, n)
                }
                embeddedTView(t, n) {
                    return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new Ac(this.metadata)) : null
                }
                isApplyingToNode(t) {
                    if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                        const n = this._declarationNodeIndex;
                        let r = t.parent;
                        for (; null !== r && 8 & r.type && r.index !== n;) r = r.parent;
                        return n === (null !== r ? r.index : -1)
                    }
                    return this._appliesToNextNode
                }
                matchTNode(t, n) {
                    const r = this.metadata.predicate;
                    if (Array.isArray(r))
                        for (let i = 0; i < r.length; i++) {
                            const a = r[i];
                            this.matchTNodeWithReadOption(t, n, iI(n, a)), this.matchTNodeWithReadOption(t, n, Fs(n, t, a, !1, !1))
                        } else r === xn ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Fs(n, t, r, !1, !1))
                }
                matchTNodeWithReadOption(t, n, r) {
                    if (null !== r) {
                        const i = this.metadata.read;
                        if (null !== i)
                            if (i === It || i === Qt || i === xn && 4 & n.type) this.addMatch(n.index, -2);
                            else {
                                const a = Fs(n, t, i, !1, !1);
                                null !== a && this.addMatch(n.index, a)
                            }
                        else this.addMatch(n.index, r)
                    }
                }
                addMatch(t, n) {
                    null === this.matches ? this.matches = [t, n] : this.matches.push(t, n)
                }
            }

            function iI(e, t) {
                const n = e.localNames;
                if (null !== n)
                    for (let r = 0; r < n.length; r += 2)
                        if (n[r] === t) return n[r + 1];
                return null
            }

            function sI(e, t, n, r) {
                return -1 === n ? function (e, t) {
                    return 11 & e.type ? gi(e, t) : 4 & e.type ? ga(e, t) : null
                }(t, e) : -2 === n ? function (e, t, n) {
                    return n === It ? gi(t, e) : n === xn ? ga(t, e) : n === Qt ? L1(t, e) : void 0
                }(e, t, r) : zi(e, e[1], n, t)
            }

            function j1(e, t, n, r) {
                const i = t[19].queries[r];
                if (null === i.matches) {
                    const a = e.data,
                        l = n.matches,
                        u = [];
                    for (let c = 0; c < l.length; c += 2) {
                        const h = l[c];
                        u.push(h < 0 ? null : sI(t, a[h], l[c + 1], n.metadata.read))
                    }
                    i.matches = u
                }
                return i.matches
            }

            function xc(e, t, n, r) {
                const i = e.queries.getByIndex(n),
                    a = i.matches;
                if (null !== a) {
                    const l = j1(e, t, i, n);
                    for (let u = 0; u < a.length; u += 2) {
                        const c = a[u];
                        if (c > 0) r.push(l[u / 2]);
                        else {
                            const h = a[u + 1],
                                p = t[-c];
                            for (let g = 10; g < p.length; g++) {
                                const m = p[g];
                                m[17] === m[3] && xc(m[1], m, h, r)
                            }
                            if (null !== p[9]) {
                                const g = p[9];
                                for (let m = 0; m < g.length; m++) {
                                    const v = g[m];
                                    xc(v[1], v, h, r)
                                }
                            }
                        }
                    }
                }
                return r
            }

            function Sc(e) {
                const t = D(),
                    n = ee(),
                    r = sh();
                Vl(r + 1);
                const i = U1(n, r);
                if (e.dirty && eh(t) === (2 == (2 & i.metadata.flags))) {
                    if (null === i.matches) e.reset([]);
                    else {
                        const a = i.crossesNgTemplate ? xc(n, t, r, []) : j1(n, t, i, r);
                        e.reset(a, D1), e.notifyOnChanges()
                    }
                    return !0
                }
                return !1
            }

            function Tc(e, t, n, r) {
                const i = ee();
                if (i.firstCreatePass) {
                    const a = Fe();
                    (function (e, t, n) {
                        null === e.queries && (e.queries = new Ic), e.queries.track(new Ac(t, n))
                    })(i, new V1(t, n, r), a.index),
                    function (e, t) {
                        const n = e.contentQueries || (e.contentQueries = []);
                        t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
                    }(i, e), 2 == (2 & n) && (i.staticContentQueries = !0)
                }! function (e, t, n) {
                    const r = new pa(4 == (4 & n));
                    Wp(e, t, r, r.destroy), null === t[19] && (t[19] = new Ec), t[19].queries.push(new Dc(r))
                }(i, D(), n)
            }

            function kc() {
                return function (e, t) {
                    return e[19].queries[t].queryList
                }(D(), sh())
            }

            function U1(e, t) {
                return e.queries.getByIndex(t)
            }
            const Ao = new te("Application Initializer");
            let bi = (() => {
                class e {
                    constructor(n) {
                        this.appInits = n, this.resolve = ua, this.reject = ua, this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, i) => {
                            this.resolve = r, this.reject = i
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const n = [],
                            r = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let i = 0; i < this.appInits.length; i++) {
                                const a = this.appInits[i]();
                                if (ta(a)) n.push(a);
                                else if (oc(a)) {
                                    const l = new Promise((u, c) => {
                                        a.subscribe({
                                            complete: u,
                                            error: c
                                        })
                                    });
                                    n.push(l)
                                }
                            }
                        Promise.all(n).then(() => {
                            r()
                        }).catch(i => {
                            this.reject(i)
                        }), 0 === n.length && r(), this.initialized = !0
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(Ao, 8))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const xo = new te("AppId"),
                VI = {
                    provide: xo,
                    useFactory: function () {
                        return `${Nc()}${Nc()}${Nc()}`
                    },
                    deps: []
                };

            function Nc() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            const sv = new te("Platform Initializer"),
                Lc = new te("Platform ID"),
                av = new te("appBootstrapListener");
            let ya = (() => {
                class e {
                    log(n) {
                        console.log(n)
                    }
                    warn(n) {
                        console.warn(n)
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const qn = new te("LocaleId"),
                lv = new te("DefaultCurrencyCode");
            class BI {
                constructor(t, n) {
                    this.ngModuleFactory = t, this.componentFactories = n
                }
            }
            const Vc = function (e) {
                    return new Cc(e)
                },
                HI = Vc,
                UI = function (e) {
                    return Promise.resolve(Vc(e))
                },
                cv = function (e) {
                    const t = Vc(e),
                        r = un(St(e).declarations).reduce((i, a) => {
                            const l = Ye(a);
                            return l && i.push(new yc(l)), i
                        }, []);
                    return new BI(t, r)
                },
                $I = cv,
                qI = function (e) {
                    return Promise.resolve(cv(e))
                };
            let ba = (() => {
                class e {
                    constructor() {
                        this.compileModuleSync = HI, this.compileModuleAsync = UI, this.compileModuleAndAllComponentsSync = $I, this.compileModuleAndAllComponentsAsync = qI
                    }
                    clearCache() {}
                    clearCacheFor(n) {}
                    getModuleId(n) {}
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const GI = (() => Promise.resolve(0))();

            function jc(e) {
                "undefined" == typeof Zone ? GI.then(() => {
                    e && e.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
            }
            class ke {
                constructor({
                    enableLongStackTrace: t = !1,
                    shouldCoalesceEventChangeDetection: n = !1,
                    shouldCoalesceRunChangeDetection: r = !1
                }) {
                    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new st(!1), this.onMicrotaskEmpty = new st(!1), this.onStable = new st(!1), this.onError = new st(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched();
                    const i = this;
                    i._nesting = 0, i._outer = i._inner = Zone.current, Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)), i.shouldCoalesceEventChangeDetection = !r && n, i.shouldCoalesceRunChangeDetection = r, i.lastRequestAnimationFrameId = -1, i.nativeRequestAnimationFrame = function () {
                            let e = re.requestAnimationFrame,
                                t = re.cancelAnimationFrame;
                            if ("undefined" != typeof Zone && e && t) {
                                const n = e[Zone.__symbol__("OriginalDelegate")];
                                n && (e = n);
                                const r = t[Zone.__symbol__("OriginalDelegate")];
                                r && (t = r)
                            }
                            return {
                                nativeRequestAnimationFrame: e,
                                nativeCancelAnimationFrame: t
                            }
                        }().nativeRequestAnimationFrame,
                        function (e) {
                            const t = () => {
                                ! function (e) {
                                    e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(re, () => {
                                        e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                            e.lastRequestAnimationFrameId = -1, Hc(e), e.isCheckStableRunning = !0, Bc(e), e.isCheckStableRunning = !1
                                        }, void 0, () => {}, () => {})), e.fakeTopEventTask.invoke()
                                    }), Hc(e))
                                }(e)
                            };
                            e._inner = e._inner.fork({
                                name: "angular",
                                properties: {
                                    isAngularZone: !0
                                },
                                onInvokeTask: (n, r, i, a, l, u) => {
                                    try {
                                        return dv(e), n.invokeTask(i, a, l, u)
                                    } finally {
                                        (e.shouldCoalesceEventChangeDetection && "eventTask" === a.type || e.shouldCoalesceRunChangeDetection) && t(), fv(e)
                                    }
                                },
                                onInvoke: (n, r, i, a, l, u, c) => {
                                    try {
                                        return dv(e), n.invoke(i, a, l, u, c)
                                    } finally {
                                        e.shouldCoalesceRunChangeDetection && t(), fv(e)
                                    }
                                },
                                onHasTask: (n, r, i, a) => {
                                    n.hasTask(i, a), r === i && ("microTask" == a.change ? (e._hasPendingMicrotasks = a.microTask, Hc(e), Bc(e)) : "macroTask" == a.change && (e.hasPendingMacrotasks = a.macroTask))
                                },
                                onHandleError: (n, r, i, a) => (n.handleError(i, a), e.runOutsideAngular(() => e.onError.emit(a)), !1)
                            })
                        }(i)
                }
                static isInAngularZone() {
                    return !0 === Zone.current.get("isAngularZone")
                }
                static assertInAngularZone() {
                    if (!ke.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
                static assertNotInAngularZone() {
                    if (ke.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
                run(t, n, r) {
                    return this._inner.run(t, n, r)
                }
                runTask(t, n, r, i) {
                    const a = this._inner,
                        l = a.scheduleEventTask("NgZoneEvent: " + i, t, YI, ua, ua);
                    try {
                        return a.runTask(l, n, r)
                    } finally {
                        a.cancelTask(l)
                    }
                }
                runGuarded(t, n, r) {
                    return this._inner.runGuarded(t, n, r)
                }
                runOutsideAngular(t) {
                    return this._outer.run(t)
                }
            }
            const YI = {};

            function Bc(e) {
                if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                    e._nesting++, e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--, !e.hasPendingMicrotasks) try {
                        e.runOutsideAngular(() => e.onStable.emit(null))
                    } finally {
                        e.isStable = !0
                    }
                }
            }

            function Hc(e) {
                e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
            }

            function dv(e) {
                e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
            }

            function fv(e) {
                e._nesting--, Bc(e)
            }
            class JI {
                constructor() {
                    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new st, this.onMicrotaskEmpty = new st, this.onStable = new st, this.onError = new st
                }
                run(t, n, r) {
                    return t.apply(n, r)
                }
                runGuarded(t, n, r) {
                    return t.apply(n, r)
                }
                runOutsideAngular(t) {
                    return t()
                }
                runTask(t, n, r, i) {
                    return t.apply(n, r)
                }
            }
            let Uc = (() => {
                    class e {
                        constructor(n) {
                            this._ngZone = n, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), n.run(() => {
                                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                            })
                        }
                        _watchAngularEvents() {
                            this._ngZone.onUnstable.subscribe({
                                next: () => {
                                    this._didWork = !0, this._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.subscribe({
                                    next: () => {
                                        ke.assertNotInAngularZone(), jc(() => {
                                            this._isZoneStable = !0, this._runCallbacksIfReady()
                                        })
                                    }
                                })
                            })
                        }
                        increasePendingRequestCount() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                        decreasePendingRequestCount() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                        isStable() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                        _runCallbacksIfReady() {
                            if (this.isStable()) jc(() => {
                                for (; 0 !== this._callbacks.length;) {
                                    let n = this._callbacks.pop();
                                    clearTimeout(n.timeoutId), n.doneCb(this._didWork)
                                }
                                this._didWork = !1
                            });
                            else {
                                let n = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter(r => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1)), this._didWork = !0
                            }
                        }
                        getPendingTasks() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                                source: n.source,
                                creationLocation: n.creationLocation,
                                data: n.data
                            })) : []
                        }
                        addCallback(n, r, i) {
                            let a = -1;
                            r && r > 0 && (a = setTimeout(() => {
                                this._callbacks = this._callbacks.filter(l => l.timeoutId !== a), n(this._didWork, this.getPendingTasks())
                            }, r)), this._callbacks.push({
                                doneCb: n,
                                timeoutId: a,
                                updateCb: i
                            })
                        }
                        whenStable(n, r, i) {
                            if (i && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                            this.addCallback(n, r, i), this._runCallbacksIfReady()
                        }
                        getPendingRequestCount() {
                            return this._pendingCount
                        }
                        findProviders(n, r, i) {
                            return []
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(ke))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                hv = (() => {
                    class e {
                        constructor() {
                            this._applications = new Map, $c.addToWindow(this)
                        }
                        registerApplication(n, r) {
                            this._applications.set(n, r)
                        }
                        unregisterApplication(n) {
                            this._applications.delete(n)
                        }
                        unregisterAllApplications() {
                            this._applications.clear()
                        }
                        getTestability(n) {
                            return this._applications.get(n) || null
                        }
                        getAllTestabilities() {
                            return Array.from(this._applications.values())
                        }
                        getAllRootElements() {
                            return Array.from(this._applications.keys())
                        }
                        findTestabilityInTree(n, r = !0) {
                            return $c.findTestabilityInTree(this, n, r)
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            class XI {
                addToWindow(t) {}
                findTestabilityInTree(t, n, r) {
                    return null
                }
            }
            let $c = new XI,
                pv = !0,
                gv = !1;
            let Yt;
            const vv = new te("AllowMultipleToken");
            class qc {
                constructor(t, n) {
                    this.name = t, this.token = n
                }
            }

            function yv(e, t, n = []) {
                const r = `Platform: ${t}`,
                    i = new te(r);
                return (a = []) => {
                    let l = bv();
                    if (!l || l.injector.get(vv, !1))
                        if (e) e(n.concat(a).concat({
                            provide: i,
                            useValue: !0
                        }));
                        else {
                            const u = n.concat(a).concat({
                                provide: i,
                                useValue: !0
                            }, {
                                provide: fo,
                                useValue: "platform"
                            });
                            ! function (e) {
                                if (Yt && !Yt.destroyed && !Yt.injector.get(vv, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                Yt = e.get(Cv);
                                const t = e.get(sv, null);
                                t && t.forEach(n => n())
                            }(ae.create({
                                providers: u,
                                name: r
                            }))
                        } return function (e) {
                        const t = bv();
                        if (!t) throw new Error("No platform exists!");
                        if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return t
                    }(i)
                }
            }

            function bv() {
                return Yt && !Yt.destroyed ? Yt : null
            }
            let Cv = (() => {
                class e {
                    constructor(n) {
                        this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(n, r) {
                        const u = function (e, t) {
                                let n;
                                return n = "noop" === e ? new JI : ("zone.js" === e ? void 0 : e) || new ke({
                                    enableLongStackTrace: (gv = !0, pv),
                                    shouldCoalesceEventChangeDetection: !!(null == t ? void 0 : t.ngZoneEventCoalescing),
                                    shouldCoalesceRunChangeDetection: !!(null == t ? void 0 : t.ngZoneRunCoalescing)
                                }), n
                            }(r ? r.ngZone : void 0, {
                                ngZoneEventCoalescing: r && r.ngZoneEventCoalescing || !1,
                                ngZoneRunCoalescing: r && r.ngZoneRunCoalescing || !1
                            }),
                            c = [{
                                provide: ke,
                                useValue: u
                            }];
                        return u.run(() => {
                            const h = ae.create({
                                    providers: c,
                                    parent: this.injector,
                                    name: n.moduleType.name
                                }),
                                p = n.create(h),
                                g = p.injector.get(cr, null);
                            if (!g) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return u.runOutsideAngular(() => {
                                    const m = u.onError.subscribe({
                                        next: v => {
                                            g.handleError(v)
                                        }
                                    });
                                    p.onDestroy(() => {
                                        Wc(this._modules, p), m.unsubscribe()
                                    })
                                }),
                                function (e, t, n) {
                                    try {
                                        const r = n();
                                        return ta(r) ? r.catch(i => {
                                            throw t.runOutsideAngular(() => e.handleError(i)), i
                                        }) : r
                                    } catch (r) {
                                        throw t.runOutsideAngular(() => e.handleError(r)), r
                                    }
                                }(g, u, () => {
                                    const m = p.injector.get(bi);
                                    return m.runInitializers(), m.donePromise.then(() => (function (e) {
                                        vt(e, "Expected localeId to be defined"), "string" == typeof e && (Qm = e.toLowerCase().replace(/_/g, "-"))
                                    }(p.injector.get(qn, ia) || ia), this._moduleDoBootstrap(p), p))
                                })
                        })
                    }
                    bootstrapModule(n, r = []) {
                        const i = _v({}, r);
                        return function (e, t, n) {
                            const r = new Cc(n);
                            return Promise.resolve(r)
                        }(0, 0, n).then(a => this.bootstrapModuleFactory(a, i))
                    }
                    _moduleDoBootstrap(n) {
                        const r = n.injector.get(Ci);
                        if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(i => r.bootstrap(i));
                        else {
                            if (!n.instance.ngDoBootstrap) throw new Error(`The module ${Q(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                            n.instance.ngDoBootstrap(r)
                        }
                        this._modules.push(n)
                    }
                    onDestroy(n) {
                        this._destroyListeners.push(n)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(n => n.destroy()), this._destroyListeners.forEach(n => n()), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(ae))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function _v(e, t) {
                return Array.isArray(t) ? t.reduce(_v, e) : L(L({}, e), t)
            }
            let Ci = (() => {
                class e {
                    constructor(n, r, i, a, l) {
                        this._zone = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = a, this._initStatus = l, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                            next: () => {
                                this._zone.run(() => {
                                    this.tick()
                                })
                            }
                        });
                        const u = new be(h => {
                                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                    h.next(this._stable), h.complete()
                                })
                            }),
                            c = new be(h => {
                                let p;
                                this._zone.runOutsideAngular(() => {
                                    p = this._zone.onStable.subscribe(() => {
                                        ke.assertNotInAngularZone(), jc(() => {
                                            !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, h.next(!0))
                                        })
                                    })
                                });
                                const g = this._zone.onUnstable.subscribe(() => {
                                    ke.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                        h.next(!1)
                                    }))
                                });
                                return () => {
                                    p.unsubscribe(), g.unsubscribe()
                                }
                            });
                        this.isStable = function (...e) {
                            let t = Number.POSITIVE_INFINITY,
                                n = null,
                                r = e[e.length - 1];
                            return as(r) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof r && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof be ? e[0] : Li(t)(pl(e, n))
                        }(u, c.pipe(e => gl()(function (e, t) {
                            return function (r) {
                                let i;
                                i = "function" == typeof e ? e : function () {
                                    return e
                                };
                                const a = Object.create(r, w0);
                                return a.source = r, a.subjectFactory = i, a
                            }
                        }(x0)(e))))
                    }
                    bootstrap(n, r) {
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        let i;
                        i = n instanceof C1 ? n : this._componentFactoryResolver.resolveComponentFactory(n), this.componentTypes.push(i.componentType);
                        const a = function (e) {
                                return e.isBoundToModule
                            }(i) ? void 0 : this._injector.get(pn),
                            u = i.create(ae.NULL, [], r || i.selector, a),
                            c = u.location.nativeElement,
                            h = u.injector.get(Uc, null),
                            p = h && u.injector.get(hv);
                        return h && p && p.registerApplication(c, h), u.onDestroy(() => {
                            this.detachView(u.hostView), Wc(this.components, u), p && p.unregisterApplication(c)
                        }), this._loadComponent(u), u
                    }
                    tick() {
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        try {
                            this._runningTick = !0;
                            for (let n of this._views) n.detectChanges()
                        } catch (n) {
                            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n))
                        } finally {
                            this._runningTick = !1
                        }
                    }
                    attachView(n) {
                        const r = n;
                        this._views.push(r), r.attachToAppRef(this)
                    }
                    detachView(n) {
                        const r = n;
                        Wc(this._views, r), r.detachFromAppRef()
                    }
                    _loadComponent(n) {
                        this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(av, []).concat(this._bootstrapListeners).forEach(i => i(n))
                    }
                    ngOnDestroy() {
                        this._views.slice().forEach(n => n.destroy()), this._onMicrotaskEmptySubscription.unsubscribe()
                    }
                    get viewCount() {
                        return this._views.length
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(ke), R(ae), R(cr), R(pr), R(bi))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function Wc(e, t) {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            const p4 = function (e) {
                return function (e, t, n) {
                    if (ys(e) && !n) {
                        const r = Ct(e.index, t);
                        return new wo(r, r)
                    }
                    return 47 & e.type ? new wo(t[16], t) : null
                }(Fe(), D(), 16 == (16 & e))
            };
            let Gc = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = p4, e
            })();
            class Sv {
                constructor() {}
                supports(t) {
                    return go(t)
                }
                create(t) {
                    return new x4(t)
                }
            }
            const A4 = (e, t) => t;
            class x4 {
                constructor(t) {
                    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || A4
                }
                forEachItem(t) {
                    let n;
                    for (n = this._itHead; null !== n; n = n._next) t(n)
                }
                forEachOperation(t) {
                    let n = this._itHead,
                        r = this._removalsHead,
                        i = 0,
                        a = null;
                    for (; n || r;) {
                        const l = !r || n && n.currentIndex < kv(r, i, a) ? n : r,
                            u = kv(l, i, a),
                            c = l.currentIndex;
                        if (l === r) i--, r = r._nextRemoved;
                        else if (n = n._next, null == l.previousIndex) i++;
                        else {
                            a || (a = []);
                            const h = u - i,
                                p = c - i;
                            if (h != p) {
                                for (let m = 0; m < h; m++) {
                                    const v = m < a.length ? a[m] : a[m] = 0,
                                        y = v + m;
                                    p <= y && y < h && (a[m] = v + 1)
                                }
                                a[l.previousIndex] = p - h
                            }
                        }
                        u !== c && t(l, u, c)
                    }
                }
                forEachPreviousItem(t) {
                    let n;
                    for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n)
                }
                forEachAddedItem(t) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
                }
                forEachMovedItem(t) {
                    let n;
                    for (n = this._movesHead; null !== n; n = n._nextMoved) t(n)
                }
                forEachRemovedItem(t) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
                }
                forEachIdentityChange(t) {
                    let n;
                    for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n)
                }
                diff(t) {
                    if (null == t && (t = []), !go(t)) throw new Error(`Error trying to diff '${Q(t)}'. Only arrays and iterables are allowed`);
                    return this.check(t) ? this : null
                }
                onDestroy() {}
                check(t) {
                    this._reset();
                    let i, a, l, n = this._itHead,
                        r = !1;
                    if (Array.isArray(t)) {
                        this.length = t.length;
                        for (let u = 0; u < this.length; u++) a = t[u], l = this._trackByFn(u, a), null !== n && Object.is(n.trackById, l) ? (r && (n = this._verifyReinsertion(n, a, l, u)), Object.is(n.item, a) || this._addIdentityChange(n, a)) : (n = this._mismatch(n, a, l, u), r = !0), n = n._next
                    } else i = 0,
                        function (e, t) {
                            if (Array.isArray(e))
                                for (let n = 0; n < e.length; n++) t(e[n]);
                            else {
                                const n = e[ti()]();
                                let r;
                                for (; !(r = n.next()).done;) t(r.value)
                            }
                        }(t, u => {
                            l = this._trackByFn(i, u), null !== n && Object.is(n.trackById, l) ? (r && (n = this._verifyReinsertion(n, u, l, i)), Object.is(n.item, u) || this._addIdentityChange(n, u)) : (n = this._mismatch(n, u, l, i), r = !0), n = n._next, i++
                        }), this.length = i;
                    return this._truncate(n), this.collection = t, this.isDirty
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
                _reset() {
                    if (this.isDirty) {
                        let t;
                        for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved) t.previousIndex = t.currentIndex;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
                _mismatch(t, n, r, i) {
                    let a;
                    return null === t ? a = this._itTail : (a = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, a, i)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, i)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, a, i)) : t = this._addAfter(new S4(n, r), a, i), t
                }
                _verifyReinsertion(t, n, r, i) {
                    let a = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
                    return null !== a ? t = this._reinsertAfter(a, t._prev, i) : t.currentIndex != i && (t.currentIndex = i, this._addToMoves(t, i)), t
                }
                _truncate(t) {
                    for (; null !== t;) {
                        const n = t._next;
                        this._addToRemovals(this._unlink(t)), t = n
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
                _reinsertAfter(t, n, r) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                    const i = t._prevRemoved,
                        a = t._nextRemoved;
                    return null === i ? this._removalsHead = a : i._nextRemoved = a, null === a ? this._removalsTail = i : a._prevRemoved = i, this._insertAfter(t, n, r), this._addToMoves(t, r), t
                }
                _moveAfter(t, n, r) {
                    return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
                }
                _addAfter(t, n, r) {
                    return this._insertAfter(t, n, r), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                }
                _insertAfter(t, n, r) {
                    const i = null === n ? this._itHead : n._next;
                    return t._next = i, t._prev = n, null === i ? this._itTail = t : i._prev = t, null === n ? this._itHead = t : n._next = t, null === this._linkedRecords && (this._linkedRecords = new Tv), this._linkedRecords.put(t), t.currentIndex = r, t
                }
                _remove(t) {
                    return this._addToRemovals(this._unlink(t))
                }
                _unlink(t) {
                    null !== this._linkedRecords && this._linkedRecords.remove(t);
                    const n = t._prev,
                        r = t._next;
                    return null === n ? this._itHead = r : n._next = r, null === r ? this._itTail = n : r._prev = n, t
                }
                _addToMoves(t, n) {
                    return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
                }
                _addToRemovals(t) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new Tv), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                }
                _addIdentityChange(t, n) {
                    return t.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                }
            }
            class S4 {
                constructor(t, n) {
                    this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                }
            }
            class T4 {
                constructor() {
                    this._head = null, this._tail = null
                }
                add(t) {
                    null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                }
                get(t, n) {
                    let r;
                    for (r = this._head; null !== r; r = r._nextDup)
                        if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
                    return null
                }
                remove(t) {
                    const n = t._prevDup,
                        r = t._nextDup;
                    return null === n ? this._head = r : n._nextDup = r, null === r ? this._tail = n : r._prevDup = n, null === this._head
                }
            }
            class Tv {
                constructor() {
                    this.map = new Map
                }
                put(t) {
                    const n = t.trackById;
                    let r = this.map.get(n);
                    r || (r = new T4, this.map.set(n, r)), r.add(t)
                }
                get(t, n) {
                    const i = this.map.get(t);
                    return i ? i.get(t, n) : null
                }
                remove(t) {
                    const n = t.trackById;
                    return this.map.get(n).remove(t) && this.map.delete(n), t
                }
                get isEmpty() {
                    return 0 === this.map.size
                }
                clear() {
                    this.map.clear()
                }
            }

            function kv(e, t, n) {
                const r = e.previousIndex;
                if (null === r) return r;
                let i = 0;
                return n && r < n.length && (i = n[r]), r + t + i
            }
            class Mv {
                constructor() {}
                supports(t) {
                    return t instanceof Map || Zu(t)
                }
                create() {
                    return new k4
                }
            }
            class k4 {
                constructor() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
                forEachItem(t) {
                    let n;
                    for (n = this._mapHead; null !== n; n = n._next) t(n)
                }
                forEachPreviousItem(t) {
                    let n;
                    for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n)
                }
                forEachChangedItem(t) {
                    let n;
                    for (n = this._changesHead; null !== n; n = n._nextChanged) t(n)
                }
                forEachAddedItem(t) {
                    let n;
                    for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
                }
                forEachRemovedItem(t) {
                    let n;
                    for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
                }
                diff(t) {
                    if (t) {
                        if (!(t instanceof Map || Zu(t))) throw new Error(`Error trying to diff '${Q(t)}'. Only maps and objects are allowed`)
                    } else t = new Map;
                    return this.check(t) ? this : null
                }
                onDestroy() {}
                check(t) {
                    this._reset();
                    let n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(t, (r, i) => {
                            if (n && n.key === i) this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
                            else {
                                const a = this._getOrCreateRecordForKey(i, r);
                                n = this._insertBeforeOrAppend(n, a)
                            }
                        }), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (let r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
                _insertBeforeOrAppend(t, n) {
                    if (t) {
                        const r = t._prev;
                        return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t
                    }
                    return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
                }
                _getOrCreateRecordForKey(t, n) {
                    if (this._records.has(t)) {
                        const i = this._records.get(t);
                        this._maybeAddToChanges(i, n);
                        const a = i._prev,
                            l = i._next;
                        return a && (a._next = l), l && (l._prev = a), i._next = null, i._prev = null, i
                    }
                    const r = new M4(t);
                    return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r
                }
                _reset() {
                    if (this.isDirty) {
                        let t;
                        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                        for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                        for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
                _maybeAddToChanges(t, n) {
                    Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t))
                }
                _addToAdditions(t) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                }
                _addToChanges(t) {
                    null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                }
                _forEach(t, n) {
                    t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r))
                }
            }
            class M4 {
                constructor(t) {
                    this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }

            function Rv() {
                return new So([new Sv])
            }
            let So = (() => {
                class e {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, r) {
                        if (null != r) {
                            const i = r.factories.slice();
                            n = n.concat(i)
                        }
                        return new e(n)
                    }
                    static extend(n) {
                        return {
                            provide: e,
                            useFactory: r => e.create(n, r || Rv()),
                            deps: [
                                [e, new Hn, new ft]
                            ]
                        }
                    }
                    find(n) {
                        const r = this.factories.find(i => i.supports(n));
                        if (null != r) return r;
                        throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}(n)}'`)
                    }
                }
                return e.\u0275prov = Y({
                    token: e,
                    providedIn: "root",
                    factory: Rv
                }), e
            })();

            function Fv() {
                return new _i([new Mv])
            }
            let _i = (() => {
                class e {
                    constructor(n) {
                        this.factories = n
                    }
                    static create(n, r) {
                        if (r) {
                            const i = r.factories.slice();
                            n = n.concat(i)
                        }
                        return new e(n)
                    }
                    static extend(n) {
                        return {
                            provide: e,
                            useFactory: r => e.create(n, r || Fv()),
                            deps: [
                                [e, new Hn, new ft]
                            ]
                        }
                    }
                    find(n) {
                        const r = this.factories.find(i => i.supports(n));
                        if (r) return r;
                        throw new Error(`Cannot find a differ supporting object '${n}'`)
                    }
                }
                return e.\u0275prov = Y({
                    token: e,
                    providedIn: "root",
                    factory: Fv
                }), e
            })();
            const F4 = [new Mv],
                P4 = new So([new Sv]),
                N4 = new _i(F4),
                L4 = yv(null, "core", [{
                    provide: Lc,
                    useValue: "unknown"
                }, {
                    provide: Cv,
                    deps: [ae]
                }, {
                    provide: hv,
                    deps: []
                }, {
                    provide: ya,
                    deps: []
                }]),
                U4 = [{
                    provide: Ci,
                    useClass: Ci,
                    deps: [ke, ae, cr, pr, bi]
                }, {
                    provide: D3,
                    deps: [ke],
                    useFactory: function (e) {
                        let t = [];
                        return e.onStable.subscribe(() => {
                                for (; t.length;) t.pop()()
                            }),
                            function (n) {
                                t.push(n)
                            }
                    }
                }, {
                    provide: bi,
                    useClass: bi,
                    deps: [
                        [new ft, Ao]
                    ]
                }, {
                    provide: ba,
                    useClass: ba,
                    deps: []
                }, VI, {
                    provide: So,
                    useFactory: function () {
                        return P4
                    },
                    deps: []
                }, {
                    provide: _i,
                    useFactory: function () {
                        return N4
                    },
                    deps: []
                }, {
                    provide: qn,
                    useFactory: function (e) {
                        return e || "undefined" != typeof $localize && $localize.locale || ia
                    },
                    deps: [
                        [new Wr(qn), new ft, new Hn]
                    ]
                }, {
                    provide: lv,
                    useValue: "USD"
                }];
            let q4 = (() => {
                    class e {
                        constructor(n) {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(Ci))
                    }, e.\u0275mod = Xn({
                        type: e
                    }), e.\u0275inj = bn({
                        providers: U4
                    }), e
                })(),
                Fa = null;

            function Gn() {
                return Fa
            }
            const qe = new te("DocumentToken");
            let br = (() => {
                class e {
                    historyGo(n) {
                        throw new Error("Not implemented")
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)
                }, e.\u0275prov = Y({
                    token: e,
                    factory: function () {
                        return R(vy)
                    },
                    providedIn: "platform"
                }), e
            })();
            const V6 = new te("Location Initialized");
            let vy = (() => {
                class e extends br {
                    constructor(n) {
                        super(), this._doc = n, this._init()
                    }
                    _init() {
                        this.location = window.location, this._history = window.history
                    }
                    getBaseHrefFromDOM() {
                        return Gn().getBaseHref(this._doc)
                    }
                    onPopState(n) {
                        const r = Gn().getGlobalEventTarget(this._doc, "window");
                        return r.addEventListener("popstate", n, !1), () => r.removeEventListener("popstate", n)
                    }
                    onHashChange(n) {
                        const r = Gn().getGlobalEventTarget(this._doc, "window");
                        return r.addEventListener("hashchange", n, !1), () => r.removeEventListener("hashchange", n)
                    }
                    get href() {
                        return this.location.href
                    }
                    get protocol() {
                        return this.location.protocol
                    }
                    get hostname() {
                        return this.location.hostname
                    }
                    get port() {
                        return this.location.port
                    }
                    get pathname() {
                        return this.location.pathname
                    }
                    get search() {
                        return this.location.search
                    }
                    get hash() {
                        return this.location.hash
                    }
                    set pathname(n) {
                        this.location.pathname = n
                    }
                    pushState(n, r, i) {
                        yy() ? this._history.pushState(n, r, i) : this.location.hash = i
                    }
                    replaceState(n, r, i) {
                        yy() ? this._history.replaceState(n, r, i) : this.location.hash = i
                    }
                    forward() {
                        this._history.forward()
                    }
                    back() {
                        this._history.back()
                    }
                    historyGo(n = 0) {
                        this._history.go(n)
                    }
                    getState() {
                        return this._history.state
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(qe))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: function () {
                        return new vy(R(qe))
                    },
                    providedIn: "platform"
                }), e
            })();

            function yy() {
                return !!window.history.pushState
            }

            function Cd(e, t) {
                if (0 == e.length) return t;
                if (0 == t.length) return e;
                let n = 0;
                return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
            }

            function by(e) {
                const t = e.match(/#|\?|$/),
                    n = t && t.index || e.length;
                return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
            }

            function Tn(e) {
                return e && "?" !== e[0] ? "?" + e : e
            }
            let Cr = (() => {
                class e {
                    historyGo(n) {
                        throw new Error("Not implemented")
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)
                }, e.\u0275prov = Y({
                    token: e,
                    factory: function () {
                        return function (e) {
                            const t = R(qe).location;
                            return new wd(R(br), t && t.origin || "")
                        }()
                    },
                    providedIn: "root"
                }), e
            })();
            const _d = new te("appBaseHref");
            let wd = (() => {
                    class e extends Cr {
                        constructor(n, r) {
                            if (super(), this._platformLocation = n, this._removeListenerFns = [], null == r && (r = this._platformLocation.getBaseHrefFromDOM()), null == r) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                            this._baseHref = r
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(n) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        prepareExternalUrl(n) {
                            return Cd(this._baseHref, n)
                        }
                        path(n = !1) {
                            const r = this._platformLocation.pathname + Tn(this._platformLocation.search),
                                i = this._platformLocation.hash;
                            return i && n ? `${r}${i}` : r
                        }
                        pushState(n, r, i, a) {
                            const l = this.prepareExternalUrl(i + Tn(a));
                            this._platformLocation.pushState(n, r, l)
                        }
                        replaceState(n, r, i, a) {
                            const l = this.prepareExternalUrl(i + Tn(a));
                            this._platformLocation.replaceState(n, r, l)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(n = 0) {
                            var r, i;
                            null == (i = (r = this._platformLocation).historyGo) || i.call(r, n)
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(br), R(_d, 8))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                H6 = (() => {
                    class e extends Cr {
                        constructor(n, r) {
                            super(), this._platformLocation = n, this._baseHref = "", this._removeListenerFns = [], null != r && (this._baseHref = r)
                        }
                        ngOnDestroy() {
                            for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
                        }
                        onPopState(n) {
                            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
                        }
                        getBaseHref() {
                            return this._baseHref
                        }
                        path(n = !1) {
                            let r = this._platformLocation.hash;
                            return null == r && (r = "#"), r.length > 0 ? r.substring(1) : r
                        }
                        prepareExternalUrl(n) {
                            const r = Cd(this._baseHref, n);
                            return r.length > 0 ? "#" + r : r
                        }
                        pushState(n, r, i, a) {
                            let l = this.prepareExternalUrl(i + Tn(a));
                            0 == l.length && (l = this._platformLocation.pathname), this._platformLocation.pushState(n, r, l)
                        }
                        replaceState(n, r, i, a) {
                            let l = this.prepareExternalUrl(i + Tn(a));
                            0 == l.length && (l = this._platformLocation.pathname), this._platformLocation.replaceState(n, r, l)
                        }
                        forward() {
                            this._platformLocation.forward()
                        }
                        back() {
                            this._platformLocation.back()
                        }
                        historyGo(n = 0) {
                            var r, i;
                            null == (i = (r = this._platformLocation).historyGo) || i.call(r, n)
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(br), R(_d, 8))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                Oa = (() => {
                    class e {
                        constructor(n, r) {
                            this._subject = new st, this._urlChangeListeners = [], this._platformStrategy = n;
                            const i = this._platformStrategy.getBaseHref();
                            this._platformLocation = r, this._baseHref = by(Cy(i)), this._platformStrategy.onPopState(a => {
                                this._subject.emit({
                                    url: this.path(!0),
                                    pop: !0,
                                    state: a.state,
                                    type: a.type
                                })
                            })
                        }
                        path(n = !1) {
                            return this.normalize(this._platformStrategy.path(n))
                        }
                        getState() {
                            return this._platformLocation.getState()
                        }
                        isCurrentPathEqualTo(n, r = "") {
                            return this.path() == this.normalize(n + Tn(r))
                        }
                        normalize(n) {
                            return e.stripTrailingSlash(function (e, t) {
                                return e && t.startsWith(e) ? t.substring(e.length) : t
                            }(this._baseHref, Cy(n)))
                        }
                        prepareExternalUrl(n) {
                            return n && "/" !== n[0] && (n = "/" + n), this._platformStrategy.prepareExternalUrl(n)
                        }
                        go(n, r = "", i = null) {
                            this._platformStrategy.pushState(i, "", n, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Tn(r)), i)
                        }
                        replaceState(n, r = "", i = null) {
                            this._platformStrategy.replaceState(i, "", n, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Tn(r)), i)
                        }
                        forward() {
                            this._platformStrategy.forward()
                        }
                        back() {
                            this._platformStrategy.back()
                        }
                        historyGo(n = 0) {
                            var r, i;
                            null == (i = (r = this._platformStrategy).historyGo) || i.call(r, n)
                        }
                        onUrlChange(n) {
                            this._urlChangeListeners.push(n), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(r => {
                                this._notifyUrlChangeListeners(r.url, r.state)
                            }))
                        }
                        _notifyUrlChangeListeners(n = "", r) {
                            this._urlChangeListeners.forEach(i => i(n, r))
                        }
                        subscribe(n, r, i) {
                            return this._subject.subscribe({
                                next: n,
                                error: r,
                                complete: i
                            })
                        }
                    }
                    return e.normalizeQueryParams = Tn, e.joinWithSlash = Cd, e.stripTrailingSlash = by, e.\u0275fac = function (n) {
                        return new(n || e)(R(Cr), R(br))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: function () {
                            return new Oa(R(Cr), R(br))
                        },
                        providedIn: "root"
                    }), e
                })();

            function Cy(e) {
                return e.replace(/\/index.html$/, "")
            }
            var Me = (() => ((Me = Me || {})[Me.Zero = 0] = "Zero", Me[Me.One = 1] = "One", Me[Me.Two = 2] = "Two", Me[Me.Few = 3] = "Few", Me[Me.Many = 4] = "Many", Me[Me.Other = 5] = "Other", Me))();
            const K6 = function (e) {
                return function (e) {
                    const t = function (e) {
                        return e.toLowerCase().replace(/_/g, "-")
                    }(e);
                    let n = Gm(t);
                    if (n) return n;
                    const r = t.split("-")[0];
                    if (n = Gm(r), n) return n;
                    if ("en" === r) return fE;
                    throw new Error(`Missing locale data for the locale "${e}".`)
                }(e)[I.PluralCase]
            };
            class qa {}
            let Ix = (() => {
                    class e extends qa {
                        constructor(n) {
                            super(), this.locale = n
                        }
                        getPluralCategory(n, r) {
                            switch (K6(r || this.locale)(n)) {
                                case Me.Zero:
                                    return "zero";
                                case Me.One:
                                    return "one";
                                case Me.Two:
                                    return "two";
                                case Me.Few:
                                    return "few";
                                case Me.Many:
                                    return "many";
                                default:
                                    return "other"
                            }
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(qn))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                sS = (() => {
                    class e {}
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275mod = Xn({
                        type: e
                    }), e.\u0275inj = bn({
                        providers: [{
                            provide: qa,
                            useClass: Ix
                        }]
                    }), e
                })();
            let cS = (() => {
                class e {}
                return e.\u0275prov = Y({
                    token: e,
                    providedIn: "root",
                    factory: () => new dS(R(qe), window)
                }), e
            })();
            class dS {
                constructor(t, n) {
                    this.document = t, this.window = n, this.offset = () => [0, 0]
                }
                setOffset(t) {
                    this.offset = Array.isArray(t) ? () => t : t
                }
                getScrollPosition() {
                    return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
                }
                scrollToPosition(t) {
                    this.supportsScrolling() && this.window.scrollTo(t[0], t[1])
                }
                scrollToAnchor(t) {
                    if (!this.supportsScrolling()) return;
                    const n = function (e, t) {
                        const n = e.getElementById(t) || e.getElementsByName(t)[0];
                        if (n) return n;
                        if ("function" == typeof e.createTreeWalker && e.body && (e.body.createShadowRoot || e.body.attachShadow)) {
                            const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
                            let i = r.currentNode;
                            for (; i;) {
                                const a = i.shadowRoot;
                                if (a) {
                                    const l = a.getElementById(t) || a.querySelector(`[name="${t}"]`);
                                    if (l) return l
                                }
                                i = r.nextNode()
                            }
                        }
                        return null
                    }(this.document, t);
                    n && (this.scrollToElement(n), this.attemptFocus(n))
                }
                setHistoryScrollRestoration(t) {
                    if (this.supportScrollRestoration()) {
                        const n = this.window.history;
                        n && n.scrollRestoration && (n.scrollRestoration = t)
                    }
                }
                scrollToElement(t) {
                    const n = t.getBoundingClientRect(),
                        r = n.left + this.window.pageXOffset,
                        i = n.top + this.window.pageYOffset,
                        a = this.offset();
                    this.window.scrollTo(r - a[0], i - a[1])
                }
                attemptFocus(t) {
                    return t.focus(), this.document.activeElement === t
                }
                supportScrollRestoration() {
                    try {
                        if (!this.supportsScrolling()) return !1;
                        const t = Oy(this.window.history) || Oy(Object.getPrototypeOf(this.window.history));
                        return !(!t || !t.writable && !t.set)
                    } catch (t) {
                        return !1
                    }
                }
                supportsScrolling() {
                    try {
                        return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window
                    } catch (t) {
                        return !1
                    }
                }
            }

            function Oy(e) {
                return Object.getOwnPropertyDescriptor(e, "scrollRestoration")
            }
            class Pd extends class extends class {} {
                constructor() {
                    super(...arguments), this.supportsDOMEvents = !0
                }
            } {
                static makeCurrent() {
                    ! function (e) {
                        Fa || (Fa = e)
                    }(new Pd)
                }
                onAndCancel(t, n, r) {
                    return t.addEventListener(n, r, !1), () => {
                        t.removeEventListener(n, r, !1)
                    }
                }
                dispatchEvent(t, n) {
                    t.dispatchEvent(n)
                }
                remove(t) {
                    t.parentNode && t.parentNode.removeChild(t)
                }
                createElement(t, n) {
                    return (n = n || this.getDefaultDocument()).createElement(t)
                }
                createHtmlDocument() {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
                getDefaultDocument() {
                    return document
                }
                isElementNode(t) {
                    return t.nodeType === Node.ELEMENT_NODE
                }
                isShadowRoot(t) {
                    return t instanceof DocumentFragment
                }
                getGlobalEventTarget(t, n) {
                    return "window" === n ? window : "document" === n ? t : "body" === n ? t.body : null
                }
                getBaseHref(t) {
                    const n = (Uo = Uo || document.querySelector("base"), Uo ? Uo.getAttribute("href") : null);
                    return null == n ? null : function (e) {
                        Wa = Wa || document.createElement("a"), Wa.setAttribute("href", e);
                        const t = Wa.pathname;
                        return "/" === t.charAt(0) ? t : `/${t}`
                    }(n)
                }
                resetBaseElement() {
                    Uo = null
                }
                getUserAgent() {
                    return window.navigator.userAgent
                }
                getCookie(t) {
                    return function (e, t) {
                        t = encodeURIComponent(t);
                        for (const n of e.split(";")) {
                            const r = n.indexOf("="),
                                [i, a] = -1 == r ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
                            if (i.trim() === t) return decodeURIComponent(a)
                        }
                        return null
                    }(document.cookie, t)
                }
            }
            let Wa, Uo = null;
            const Py = new te("TRANSITION_ID"),
                yS = [{
                    provide: Ao,
                    useFactory: function (e, t, n) {
                        return () => {
                            n.get(bi).donePromise.then(() => {
                                const r = Gn(),
                                    i = t.querySelectorAll(`style[ng-transition="${e}"]`);
                                for (let a = 0; a < i.length; a++) r.remove(i[a])
                            })
                        }
                    },
                    deps: [Py, qe, ae],
                    multi: !0
                }];
            class Nd {
                static init() {
                    ! function (e) {
                        $c = e
                    }(new Nd)
                }
                addToWindow(t) {
                    re.getAngularTestability = (r, i = !0) => {
                        const a = t.findTestabilityInTree(r, i);
                        if (null == a) throw new Error("Could not find testability for element.");
                        return a
                    }, re.getAllAngularTestabilities = () => t.getAllTestabilities(), re.getAllAngularRootElements = () => t.getAllRootElements(), re.frameworkStabilizers || (re.frameworkStabilizers = []), re.frameworkStabilizers.push(r => {
                        const i = re.getAllAngularTestabilities();
                        let a = i.length,
                            l = !1;
                        const u = function (c) {
                            l = l || c, a--, 0 == a && r(l)
                        };
                        i.forEach(function (c) {
                            c.whenStable(u)
                        })
                    })
                }
                findTestabilityInTree(t, n, r) {
                    if (null == n) return null;
                    const i = t.getTestability(n);
                    return null != i ? i : r ? Gn().isShadowRoot(n) ? this.findTestabilityInTree(t, n.host, !0) : this.findTestabilityInTree(t, n.parentElement, !0) : null
                }
            }
            let bS = (() => {
                class e {
                    build() {
                        return new XMLHttpRequest
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const $o = new te("EventManagerPlugins");
            let Ga = (() => {
                class e {
                    constructor(n, r) {
                        this._zone = r, this._eventNameToPlugin = new Map, n.forEach(i => i.manager = this), this._plugins = n.slice().reverse()
                    }
                    addEventListener(n, r, i) {
                        return this._findPluginFor(r).addEventListener(n, r, i)
                    }
                    addGlobalEventListener(n, r, i) {
                        return this._findPluginFor(r).addGlobalEventListener(n, r, i)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(n) {
                        const r = this._eventNameToPlugin.get(n);
                        if (r) return r;
                        const i = this._plugins;
                        for (let a = 0; a < i.length; a++) {
                            const l = i[a];
                            if (l.supports(n)) return this._eventNameToPlugin.set(n, l), l
                        }
                        throw new Error(`No event manager plugin found for event ${n}`)
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R($o), R(ke))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class Ld {
                constructor(t) {
                    this._doc = t
                }
                addGlobalEventListener(t, n, r) {
                    const i = Gn().getGlobalEventTarget(this._doc, t);
                    if (!i) throw new Error(`Unsupported event target ${i} for event ${n}`);
                    return this.addEventListener(i, n, r)
                }
            }
            let Ly = (() => {
                    class e {
                        constructor() {
                            this._stylesSet = new Set
                        }
                        addStyles(n) {
                            const r = new Set;
                            n.forEach(i => {
                                this._stylesSet.has(i) || (this._stylesSet.add(i), r.add(i))
                            }), this.onStylesAdded(r)
                        }
                        onStylesAdded(n) {}
                        getAllStyles() {
                            return Array.from(this._stylesSet)
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                qo = (() => {
                    class e extends Ly {
                        constructor(n) {
                            super(), this._doc = n, this._hostNodes = new Map, this._hostNodes.set(n.head, [])
                        }
                        _addStylesToHost(n, r, i) {
                            n.forEach(a => {
                                const l = this._doc.createElement("style");
                                l.textContent = a, i.push(r.appendChild(l))
                            })
                        }
                        addHost(n) {
                            const r = [];
                            this._addStylesToHost(this._stylesSet, n, r), this._hostNodes.set(n, r)
                        }
                        removeHost(n) {
                            const r = this._hostNodes.get(n);
                            r && r.forEach(Vy), this._hostNodes.delete(n)
                        }
                        onStylesAdded(n) {
                            this._hostNodes.forEach((r, i) => {
                                this._addStylesToHost(n, i, r)
                            })
                        }
                        ngOnDestroy() {
                            this._hostNodes.forEach(n => n.forEach(Vy))
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(qe))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();

            function Vy(e) {
                Gn().remove(e)
            }
            const Vd = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                jd = /%COMP%/g;

            function Qa(e, t, n) {
                for (let r = 0; r < t.length; r++) {
                    let i = t[r];
                    Array.isArray(i) ? Qa(e, i, n) : (i = i.replace(jd, e), n.push(i))
                }
                return n
            }

            function Hy(e) {
                return t => {
                    if ("__ngUnwrap__" === t) return e;
                    !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
                }
            }
            let Bd = (() => {
                class e {
                    constructor(n, r, i) {
                        this.eventManager = n, this.sharedStylesHost = r, this.appId = i, this.rendererByCompId = new Map, this.defaultRenderer = new Hd(n)
                    }
                    createRenderer(n, r) {
                        if (!n || !r) return this.defaultRenderer;
                        switch (r.encapsulation) {
                            case yt.Emulated: {
                                let i = this.rendererByCompId.get(r.id);
                                return i || (i = new OS(this.eventManager, this.sharedStylesHost, r, this.appId), this.rendererByCompId.set(r.id, i)), i.applyToHost(n), i
                            }
                            case 1:
                            case yt.ShadowDom:
                                return new PS(this.eventManager, this.sharedStylesHost, n, r);
                            default:
                                if (!this.rendererByCompId.has(r.id)) {
                                    const i = Qa(r.id, r.styles, []);
                                    this.sharedStylesHost.addStyles(i), this.rendererByCompId.set(r.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(Ga), R(qo), R(xo))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class Hd {
                constructor(t) {
                    this.eventManager = t, this.data = Object.create(null), this.destroyNode = null
                }
                destroy() {}
                createElement(t, n) {
                    return n ? document.createElementNS(Vd[n] || n, t) : document.createElement(t)
                }
                createComment(t) {
                    return document.createComment(t)
                }
                createText(t) {
                    return document.createTextNode(t)
                }
                appendChild(t, n) {
                    t.appendChild(n)
                }
                insertBefore(t, n, r) {
                    t && t.insertBefore(n, r)
                }
                removeChild(t, n) {
                    t && t.removeChild(n)
                }
                selectRootElement(t, n) {
                    let r = "string" == typeof t ? document.querySelector(t) : t;
                    if (!r) throw new Error(`The selector "${t}" did not match any elements`);
                    return n || (r.textContent = ""), r
                }
                parentNode(t) {
                    return t.parentNode
                }
                nextSibling(t) {
                    return t.nextSibling
                }
                setAttribute(t, n, r, i) {
                    if (i) {
                        n = i + ":" + n;
                        const a = Vd[i];
                        a ? t.setAttributeNS(a, n, r) : t.setAttribute(n, r)
                    } else t.setAttribute(n, r)
                }
                removeAttribute(t, n, r) {
                    if (r) {
                        const i = Vd[r];
                        i ? t.removeAttributeNS(i, n) : t.removeAttribute(`${r}:${n}`)
                    } else t.removeAttribute(n)
                }
                addClass(t, n) {
                    t.classList.add(n)
                }
                removeClass(t, n) {
                    t.classList.remove(n)
                }
                setStyle(t, n, r, i) {
                    i & (Dt.DashCase | Dt.Important) ? t.style.setProperty(n, r, i & Dt.Important ? "important" : "") : t.style[n] = r
                }
                removeStyle(t, n, r) {
                    r & Dt.DashCase ? t.style.removeProperty(n) : t.style[n] = ""
                }
                setProperty(t, n, r) {
                    t[n] = r
                }
                setValue(t, n) {
                    t.nodeValue = n
                }
                listen(t, n, r) {
                    return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, n, Hy(r)) : this.eventManager.addEventListener(t, n, Hy(r))
                }
            }
            class OS extends Hd {
                constructor(t, n, r, i) {
                    super(t), this.component = r;
                    const a = Qa(i + "-" + r.id, r.styles, []);
                    n.addStyles(a), this.contentAttr = function (e) {
                        return "_ngcontent-%COMP%".replace(jd, e)
                    }(i + "-" + r.id), this.hostAttr = function (e) {
                        return "_nghost-%COMP%".replace(jd, e)
                    }(i + "-" + r.id)
                }
                applyToHost(t) {
                    super.setAttribute(t, this.hostAttr, "")
                }
                createElement(t, n) {
                    const r = super.createElement(t, n);
                    return super.setAttribute(r, this.contentAttr, ""), r
                }
            }
            class PS extends Hd {
                constructor(t, n, r, i) {
                    super(t), this.sharedStylesHost = n, this.hostEl = r, this.shadowRoot = r.attachShadow({
                        mode: "open"
                    }), this.sharedStylesHost.addHost(this.shadowRoot);
                    const a = Qa(i.id, i.styles, []);
                    for (let l = 0; l < a.length; l++) {
                        const u = document.createElement("style");
                        u.textContent = a[l], this.shadowRoot.appendChild(u)
                    }
                }
                nodeOrShadowRoot(t) {
                    return t === this.hostEl ? this.shadowRoot : t
                }
                destroy() {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }
                appendChild(t, n) {
                    return super.appendChild(this.nodeOrShadowRoot(t), n)
                }
                insertBefore(t, n, r) {
                    return super.insertBefore(this.nodeOrShadowRoot(t), n, r)
                }
                removeChild(t, n) {
                    return super.removeChild(this.nodeOrShadowRoot(t), n)
                }
                parentNode(t) {
                    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
                }
            }
            let NS = (() => {
                class e extends Ld {
                    constructor(n) {
                        super(n)
                    }
                    supports(n) {
                        return !0
                    }
                    addEventListener(n, r, i) {
                        return n.addEventListener(r, i, !1), () => this.removeEventListener(n, r, i)
                    }
                    removeEventListener(n, r, i) {
                        return n.removeEventListener(r, i)
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(qe))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const qy = ["alt", "control", "meta", "shift"],
                $S = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                Wy = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                },
                qS = {
                    alt: e => e.altKey,
                    control: e => e.ctrlKey,
                    meta: e => e.metaKey,
                    shift: e => e.shiftKey
                };
            let WS = (() => {
                class e extends Ld {
                    constructor(n) {
                        super(n)
                    }
                    supports(n) {
                        return null != e.parseEventName(n)
                    }
                    addEventListener(n, r, i) {
                        const a = e.parseEventName(r),
                            l = e.eventCallback(a.fullKey, i, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => Gn().onAndCancel(n, a.domEventName, l))
                    }
                    static parseEventName(n) {
                        const r = n.toLowerCase().split("."),
                            i = r.shift();
                        if (0 === r.length || "keydown" !== i && "keyup" !== i) return null;
                        const a = e._normalizeKey(r.pop());
                        let l = "";
                        if (qy.forEach(c => {
                                const h = r.indexOf(c);
                                h > -1 && (r.splice(h, 1), l += c + ".")
                            }), l += a, 0 != r.length || 0 === a.length) return null;
                        const u = {};
                        return u.domEventName = i, u.fullKey = l, u
                    }
                    static getEventFullKey(n) {
                        let r = "",
                            i = function (e) {
                                let t = e.key;
                                if (null == t) {
                                    if (t = e.keyIdentifier, null == t) return "Unidentified";
                                    t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Wy.hasOwnProperty(t) && (t = Wy[t]))
                                }
                                return $S[t] || t
                            }(n);
                        return i = i.toLowerCase(), " " === i ? i = "space" : "." === i && (i = "dot"), qy.forEach(a => {
                            a != i && qS[a](n) && (r += a + ".")
                        }), r += i, r
                    }
                    static eventCallback(n, r, i) {
                        return a => {
                            e.getEventFullKey(a) === n && i.runGuarded(() => r(a))
                        }
                    }
                    static _normalizeKey(n) {
                        return "esc" === n ? "escape" : n
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(qe))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const ZS = [{
                    provide: Lc,
                    useValue: "browser"
                }, {
                    provide: sv,
                    useValue: function () {
                        Pd.makeCurrent(), Nd.init()
                    },
                    multi: !0
                }, {
                    provide: qe,
                    useFactory: function () {
                        return function (e) {
                            Tl = e
                        }(document), document
                    },
                    deps: []
                }],
                XS = yv(L4, "browser", ZS),
                eT = [
                    [], {
                        provide: fo,
                        useValue: "root"
                    }, {
                        provide: cr,
                        useFactory: function () {
                            return new cr
                        },
                        deps: []
                    }, {
                        provide: $o,
                        useClass: NS,
                        multi: !0,
                        deps: [qe, ke, Lc]
                    }, {
                        provide: $o,
                        useClass: WS,
                        multi: !0,
                        deps: [qe]
                    },
                    [], {
                        provide: Bd,
                        useClass: Bd,
                        deps: [Ga, qo, xo]
                    }, {
                        provide: ca,
                        useExisting: Bd
                    }, {
                        provide: Ly,
                        useExisting: qo
                    }, {
                        provide: qo,
                        useClass: qo,
                        deps: [qe]
                    }, {
                        provide: Uc,
                        useClass: Uc,
                        deps: [ke]
                    }, {
                        provide: Ga,
                        useClass: Ga,
                        deps: [$o, ke]
                    }, {
                        provide: class {},
                        useClass: bS,
                        deps: []
                    },
                    []
                ];
            let tT = (() => {
                class e {
                    constructor(n) {
                        if (n) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                    }
                    static withServerTransition(n) {
                        return {
                            ngModule: e,
                            providers: [{
                                provide: xo,
                                useValue: n.appId
                            }, {
                                provide: Py,
                                useExisting: xo
                            }, yS]
                        }
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(e, 12))
                }, e.\u0275mod = Xn({
                    type: e
                }), e.\u0275inj = bn({
                    providers: eT,
                    imports: [sS, q4]
                }), e
            })();

            function q(...e) {
                let t = e[e.length - 1];
                return as(t) ? (e.pop(), hl(e, t)) : pl(e)
            }
            "undefined" != typeof window && window;
            class nn extends vn {
                constructor(t) {
                    super(), this._value = t
                }
                get value() {
                    return this.getValue()
                }
                _subscribe(t) {
                    const n = super._subscribe(t);
                    return n && !n.closed && t.next(this._value), n
                }
                getValue() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new Sr;
                    return this._value
                }
                next(t) {
                    super.next(this._value = t)
                }
            }
            const Gy = {};
            class cT {
                constructor(t) {
                    this.resultSelector = t
                }
                call(t, n) {
                    return n.subscribe(new dT(t, this.resultSelector))
                }
            }
            class dT extends ds {
                constructor(t, n) {
                    super(t), this.resultSelector = n, this.active = 0, this.values = [], this.observables = []
                }
                _next(t) {
                    this.values.push(Gy), this.observables.push(t)
                }
                _complete() {
                    const t = this.observables,
                        n = t.length;
                    if (0 === n) this.destination.complete();
                    else {
                        this.active = n, this.toRespond = n;
                        for (let r = 0; r < n; r++) {
                            const i = t[r];
                            this.add(cs(this, i, i, r))
                        }
                    }
                }
                notifyComplete(t) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
                notifyNext(t, n, r, i, a) {
                    const l = this.values,
                        c = this.toRespond ? l[r] === Gy ? --this.toRespond : this.toRespond : 0;
                    l[r] = n, 0 === c && (this.resultSelector ? this._tryResultSelector(l) : this.destination.next(l.slice()))
                }
                _tryResultSelector(t) {
                    let n;
                    try {
                        n = this.resultSelector.apply(this, t)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this.destination.next(n)
                }
            }
            const Ya = (() => {
                function e() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();

            function zd(...e) {
                return Li(1)(q(...e))
            }
            const xi = new be(e => e.complete());

            function Gd(e) {
                return e ? function (e) {
                    return new be(t => e.schedule(() => t.complete()))
                }(e) : xi
            }

            function Qy(e) {
                return new be(t => {
                    let n;
                    try {
                        n = e()
                    } catch (i) {
                        return void t.error(i)
                    }
                    return (n ? ut(n) : Gd()).subscribe(t)
                })
            }

            function Yn(e, t) {
                return "function" == typeof t ? n => n.pipe(Yn((r, i) => ut(e(r, i)).pipe(fe((a, l) => t(r, a, i, l))))) : n => n.lift(new pT(e))
            }
            class pT {
                constructor(t) {
                    this.project = t
                }
                call(t, n) {
                    return n.subscribe(new gT(t, this.project))
                }
            }
            class gT extends ds {
                constructor(t, n) {
                    super(t), this.project = n, this.index = 0
                }
                _next(t) {
                    let n;
                    const r = this.index++;
                    try {
                        n = this.project(t, r)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    this._innerSub(n, t, r)
                }
                _innerSub(t, n, r) {
                    const i = this.innerSubscription;
                    i && i.unsubscribe();
                    const a = new ls(this, n, r),
                        l = this.destination;
                    l.add(a), this.innerSubscription = cs(this, t, void 0, void 0, a), this.innerSubscription !== a && l.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: t
                    } = this;
                    (!t || t.closed) && super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = null
                }
                notifyComplete(t) {
                    this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete()
                }
                notifyNext(t, n, r, i, a) {
                    this.destination.next(n)
                }
            }
            const Yy = (() => {
                function e() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();

            function Qd(e) {
                return t => 0 === e ? Gd() : t.lift(new mT(e))
            }
            class mT {
                constructor(t) {
                    if (this.total = t, this.total < 0) throw new Yy
                }
                call(t, n) {
                    return n.subscribe(new vT(t, this.total))
                }
            }
            class vT extends De {
                constructor(t, n) {
                    super(t), this.total = n, this.count = 0
                }
                _next(t) {
                    const n = this.total,
                        r = ++this.count;
                    r <= n && (this.destination.next(t), r === n && (this.destination.complete(), this.unsubscribe()))
                }
            }

            function Ky(e, t) {
                let n = !1;
                return arguments.length >= 2 && (n = !0),
                    function (i) {
                        return i.lift(new bT(e, t, n))
                    }
            }
            class bT {
                constructor(t, n, r = !1) {
                    this.accumulator = t, this.seed = n, this.hasSeed = r
                }
                call(t, n) {
                    return n.subscribe(new CT(t, this.accumulator, this.seed, this.hasSeed))
                }
            }
            class CT extends De {
                constructor(t, n, r, i) {
                    super(t), this.accumulator = n, this._seed = r, this.hasSeed = i, this.index = 0
                }
                get seed() {
                    return this._seed
                }
                set seed(t) {
                    this.hasSeed = !0, this._seed = t
                }
                _next(t) {
                    if (this.hasSeed) return this._tryNext(t);
                    this.seed = t, this.destination.next(t)
                }
                _tryNext(t) {
                    const n = this.index++;
                    let r;
                    try {
                        r = this.accumulator(this.seed, t, n)
                    } catch (i) {
                        this.destination.error(i)
                    }
                    this.seed = r, this.destination.next(r)
                }
            }

            function _r(e, t) {
                return function (r) {
                    return r.lift(new _T(e, t))
                }
            }
            class _T {
                constructor(t, n) {
                    this.predicate = t, this.thisArg = n
                }
                call(t, n) {
                    return n.subscribe(new wT(t, this.predicate, this.thisArg))
                }
            }
            class wT extends De {
                constructor(t, n, r) {
                    super(t), this.predicate = n, this.thisArg = r, this.count = 0
                }
                _next(t) {
                    let n;
                    try {
                        n = this.predicate.call(this.thisArg, t, this.count++)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    n && this.destination.next(t)
                }
            }

            function wr(e) {
                return function (n) {
                    const r = new DT(e),
                        i = n.lift(r);
                    return r.caught = i
                }
            }
            class DT {
                constructor(t) {
                    this.selector = t
                }
                call(t, n) {
                    return n.subscribe(new ET(t, this.selector, this.caught))
                }
            }
            class ET extends ds {
                constructor(t, n, r) {
                    super(t), this.selector = n, this.caught = r
                }
                error(t) {
                    if (!this.isStopped) {
                        let n;
                        try {
                            n = this.selector(t, this.caught)
                        } catch (a) {
                            return void super.error(a)
                        }
                        this._unsubscribeAndRecycle();
                        const r = new ls(this, void 0, void 0);
                        this.add(r);
                        const i = cs(this, n, void 0, void 0, r);
                        i !== r && this.add(i)
                    }
                }
            }

            function Wo(e, t) {
                return $e(e, t, 1)
            }

            function Yd(e) {
                return function (n) {
                    return 0 === e ? Gd() : n.lift(new IT(e))
                }
            }
            class IT {
                constructor(t) {
                    if (this.total = t, this.total < 0) throw new Yy
                }
                call(t, n) {
                    return n.subscribe(new AT(t, this.total))
                }
            }
            class AT extends De {
                constructor(t, n) {
                    super(t), this.total = n, this.ring = new Array, this.count = 0
                }
                _next(t) {
                    const n = this.ring,
                        r = this.total,
                        i = this.count++;
                    n.length < r ? n.push(t) : n[i % r] = t
                }
                _complete() {
                    const t = this.destination;
                    let n = this.count;
                    if (n > 0) {
                        const r = this.count >= this.total ? this.total : this.count,
                            i = this.ring;
                        for (let a = 0; a < r; a++) {
                            const l = n++ % r;
                            t.next(i[l])
                        }
                    }
                    t.complete()
                }
            }

            function Zy(e = TT) {
                return t => t.lift(new xT(e))
            }
            class xT {
                constructor(t) {
                    this.errorFactory = t
                }
                call(t, n) {
                    return n.subscribe(new ST(t, this.errorFactory))
                }
            }
            class ST extends De {
                constructor(t, n) {
                    super(t), this.errorFactory = n, this.hasValue = !1
                }
                _next(t) {
                    this.hasValue = !0, this.destination.next(t)
                }
                _complete() {
                    if (this.hasValue) return this.destination.complete(); {
                        let t;
                        try {
                            t = this.errorFactory()
                        } catch (n) {
                            t = n
                        }
                        this.destination.error(t)
                    }
                }
            }

            function TT() {
                return new Ya
            }

            function Jy(e = null) {
                return t => t.lift(new kT(e))
            }
            class kT {
                constructor(t) {
                    this.defaultValue = t
                }
                call(t, n) {
                    return n.subscribe(new MT(t, this.defaultValue))
                }
            }
            class MT extends De {
                constructor(t, n) {
                    super(t), this.defaultValue = n, this.isEmpty = !0
                }
                _next(t) {
                    this.isEmpty = !1, this.destination.next(t)
                }
                _complete() {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }
            }

            function Si(e, t) {
                const n = arguments.length >= 2;
                return r => r.pipe(e ? _r((i, a) => e(i, a, r)) : ss, Qd(1), n ? Jy(t) : Zy(() => new Ya))
            }

            function Kn() {}

            function At(e, t, n) {
                return function (i) {
                    return i.lift(new FT(e, t, n))
                }
            }
            class FT {
                constructor(t, n, r) {
                    this.nextOrObserver = t, this.error = n, this.complete = r
                }
                call(t, n) {
                    return n.subscribe(new OT(t, this.nextOrObserver, this.error, this.complete))
                }
            }
            class OT extends De {
                constructor(t, n, r, i) {
                    super(t), this._tapNext = Kn, this._tapError = Kn, this._tapComplete = Kn, this._tapError = r || Kn, this._tapComplete = i || Kn, Ue(n) ? (this._context = this, this._tapNext = n) : n && (this._context = n, this._tapNext = n.next || Kn, this._tapError = n.error || Kn, this._tapComplete = n.complete || Kn)
                }
                _next(t) {
                    try {
                        this._tapNext.call(this._context, t)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(t)
                }
                _error(t) {
                    try {
                        this._tapError.call(this._context, t)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.error(t)
                }
                _complete() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    return this.destination.complete()
                }
            }
            class NT {
                constructor(t) {
                    this.callback = t
                }
                call(t, n) {
                    return n.subscribe(new LT(t, this.callback))
                }
            }
            class LT extends De {
                constructor(t, n) {
                    super(t), this.add(new ye(n))
                }
            }
            class Mn {
                constructor(t, n) {
                    this.id = t, this.url = n
                }
            }
            class Ka extends Mn {
                constructor(t, n, r = "imperative", i = null) {
                    super(t, n), this.navigationTrigger = r, this.restoredState = i
                }
                toString() {
                    return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                }
            }
            class Dr extends Mn {
                constructor(t, n, r) {
                    super(t, n), this.urlAfterRedirects = r
                }
                toString() {
                    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                }
            }
            class Kd extends Mn {
                constructor(t, n, r) {
                    super(t, n), this.reason = r
                }
                toString() {
                    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                }
            }
            class VT extends Mn {
                constructor(t, n, r) {
                    super(t, n), this.error = r
                }
                toString() {
                    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                }
            }
            class jT extends Mn {
                constructor(t, n, r, i) {
                    super(t, n), this.urlAfterRedirects = r, this.state = i
                }
                toString() {
                    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class BT extends Mn {
                constructor(t, n, r, i) {
                    super(t, n), this.urlAfterRedirects = r, this.state = i
                }
                toString() {
                    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class HT extends Mn {
                constructor(t, n, r, i, a) {
                    super(t, n), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = a
                }
                toString() {
                    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                }
            }
            class UT extends Mn {
                constructor(t, n, r, i) {
                    super(t, n), this.urlAfterRedirects = r, this.state = i
                }
                toString() {
                    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class $T extends Mn {
                constructor(t, n, r, i) {
                    super(t, n), this.urlAfterRedirects = r, this.state = i
                }
                toString() {
                    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                }
            }
            class Xy {
                constructor(t) {
                    this.route = t
                }
                toString() {
                    return `RouteConfigLoadStart(path: ${this.route.path})`
                }
            }
            class eb {
                constructor(t) {
                    this.route = t
                }
                toString() {
                    return `RouteConfigLoadEnd(path: ${this.route.path})`
                }
            }
            class qT {
                constructor(t) {
                    this.snapshot = t
                }
                toString() {
                    return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class WT {
                constructor(t) {
                    this.snapshot = t
                }
                toString() {
                    return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class zT {
                constructor(t) {
                    this.snapshot = t
                }
                toString() {
                    return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class GT {
                constructor(t) {
                    this.snapshot = t
                }
                toString() {
                    return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                }
            }
            class tb {
                constructor(t, n, r) {
                    this.routerEvent = t, this.position = n, this.anchor = r
                }
                toString() {
                    return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                }
            }
            const Z = "primary";
            class QT {
                constructor(t) {
                    this.params = t || {}
                }
                has(t) {
                    return Object.prototype.hasOwnProperty.call(this.params, t)
                }
                get(t) {
                    if (this.has(t)) {
                        const n = this.params[t];
                        return Array.isArray(n) ? n[0] : n
                    }
                    return null
                }
                getAll(t) {
                    if (this.has(t)) {
                        const n = this.params[t];
                        return Array.isArray(n) ? n : [n]
                    }
                    return []
                }
                get keys() {
                    return Object.keys(this.params)
                }
            }

            function Ti(e) {
                return new QT(e)
            }
            const nb = "ngNavigationCancelingError";

            function Zd(e) {
                const t = Error("NavigationCancelingError: " + e);
                return t[nb] = !0, t
            }

            function KT(e, t, n) {
                const r = n.path.split("/");
                if (r.length > e.length || "full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
                const i = {};
                for (let a = 0; a < r.length; a++) {
                    const l = r[a],
                        u = e[a];
                    if (l.startsWith(":")) i[l.substring(1)] = u;
                    else if (l !== u.path) return null
                }
                return {
                    consumed: e.slice(0, r.length),
                    posParams: i
                }
            }

            function gn(e, t) {
                const n = e ? Object.keys(e) : void 0,
                    r = t ? Object.keys(t) : void 0;
                if (!n || !r || n.length != r.length) return !1;
                let i;
                for (let a = 0; a < n.length; a++)
                    if (i = n[a], !rb(e[i], t[i])) return !1;
                return !0
            }

            function rb(e, t) {
                if (Array.isArray(e) && Array.isArray(t)) {
                    if (e.length !== t.length) return !1;
                    const n = [...e].sort(),
                        r = [...t].sort();
                    return n.every((i, a) => r[a] === i)
                }
                return e === t
            }

            function ib(e) {
                return Array.prototype.concat.apply([], e)
            }

            function ob(e) {
                return e.length > 0 ? e[e.length - 1] : null
            }

            function We(e, t) {
                for (const n in e) e.hasOwnProperty(n) && t(e[n], n)
            }

            function mn(e) {
                return oc(e) ? e : ta(e) ? ut(Promise.resolve(e)) : q(e)
            }
            const XT = {
                    exact: function lb(e, t, n) {
                        if (!Ir(e.segments, t.segments) || !Za(e.segments, t.segments, n) || e.numberOfChildren !== t.numberOfChildren) return !1;
                        for (const r in t.children)
                            if (!e.children[r] || !lb(e.children[r], t.children[r], n)) return !1;
                        return !0
                    },
                    subset: ub
                },
                sb = {
                    exact: function (e, t) {
                        return gn(e, t)
                    },
                    subset: function (e, t) {
                        return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(n => rb(e[n], t[n]))
                    },
                    ignored: () => !0
                };

            function ab(e, t, n) {
                return XT[n.paths](e.root, t.root, n.matrixParams) && sb[n.queryParams](e.queryParams, t.queryParams) && !("exact" === n.fragment && e.fragment !== t.fragment)
            }

            function ub(e, t, n) {
                return cb(e, t, t.segments, n)
            }

            function cb(e, t, n, r) {
                if (e.segments.length > n.length) {
                    const i = e.segments.slice(0, n.length);
                    return !(!Ir(i, n) || t.hasChildren() || !Za(i, n, r))
                }
                if (e.segments.length === n.length) {
                    if (!Ir(e.segments, n) || !Za(e.segments, n, r)) return !1;
                    for (const i in t.children)
                        if (!e.children[i] || !ub(e.children[i], t.children[i], r)) return !1;
                    return !0
                } {
                    const i = n.slice(0, e.segments.length),
                        a = n.slice(e.segments.length);
                    return !!(Ir(e.segments, i) && Za(e.segments, i, r) && e.children[Z]) && cb(e.children[Z], t, a, r)
                }
            }

            function Za(e, t, n) {
                return t.every((r, i) => sb[n](e[i].parameters, r.parameters))
            }
            class Er {
                constructor(t, n, r) {
                    this.root = t, this.queryParams = n, this.fragment = r
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = Ti(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return ik.serialize(this)
                }
            }
            class X {
                constructor(t, n) {
                    this.segments = t, this.children = n, this.parent = null, We(n, (r, i) => r.parent = this)
                }
                hasChildren() {
                    return this.numberOfChildren > 0
                }
                get numberOfChildren() {
                    return Object.keys(this.children).length
                }
                toString() {
                    return Ja(this)
                }
            }
            class zo {
                constructor(t, n) {
                    this.path = t, this.parameters = n
                }
                get parameterMap() {
                    return this._parameterMap || (this._parameterMap = Ti(this.parameters)), this._parameterMap
                }
                toString() {
                    return gb(this)
                }
            }

            function Ir(e, t) {
                return e.length === t.length && e.every((n, r) => n.path === t[r].path)
            }
            class db {}
            class fb {
                parse(t) {
                    const n = new hk(t);
                    return new Er(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment())
                }
                serialize(t) {
                    const n = `/${Go(t.root,!0)}`,
                        r = function (e) {
                            const t = Object.keys(e).map(n => {
                                const r = e[n];
                                return Array.isArray(r) ? r.map(i => `${Xa(n)}=${Xa(i)}`).join("&") : `${Xa(n)}=${Xa(r)}`
                            }).filter(n => !!n);
                            return t.length ? `?${t.join("&")}` : ""
                        }(t.queryParams),
                        i = "string" == typeof t.fragment ? `#${function(e){return encodeURI(e)}(t.fragment)}` : "";
                    return `${n}${r}${i}`
                }
            }
            const ik = new fb;

            function Ja(e) {
                return e.segments.map(t => gb(t)).join("/")
            }

            function Go(e, t) {
                if (!e.hasChildren()) return Ja(e);
                if (t) {
                    const n = e.children[Z] ? Go(e.children[Z], !1) : "",
                        r = [];
                    return We(e.children, (i, a) => {
                        a !== Z && r.push(`${a}:${Go(i,!1)}`)
                    }), r.length > 0 ? `${n}(${r.join("//")})` : n
                } {
                    const n = function (e, t) {
                        let n = [];
                        return We(e.children, (r, i) => {
                            i === Z && (n = n.concat(t(r, i)))
                        }), We(e.children, (r, i) => {
                            i !== Z && (n = n.concat(t(r, i)))
                        }), n
                    }(e, (r, i) => i === Z ? [Go(e.children[Z], !1)] : [`${i}:${Go(r,!1)}`]);
                    return 1 === Object.keys(e.children).length && null != e.children[Z] ? `${Ja(e)}/${n[0]}` : `${Ja(e)}/(${n.join("//")})`
                }
            }

            function hb(e) {
                return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }

            function Xa(e) {
                return hb(e).replace(/%3B/gi, ";")
            }

            function Jd(e) {
                return hb(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }

            function el(e) {
                return decodeURIComponent(e)
            }

            function pb(e) {
                return el(e.replace(/\+/g, "%20"))
            }

            function gb(e) {
                return `${Jd(e.path)}${function(e){return Object.keys(e).map(t=>`;${Jd(t)}=${Jd(e[t])}`).join("")}(e.parameters)}`
            }
            const lk = /^[^\/()?;=#]+/;

            function tl(e) {
                const t = e.match(lk);
                return t ? t[0] : ""
            }
            const uk = /^[^=?&#]+/,
                dk = /^[^&#]+/;
            class hk {
                constructor(t) {
                    this.url = t, this.remaining = t
                }
                parseRootSegment() {
                    return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new X([], {}) : new X([], this.parseChildren())
                }
                parseQueryParams() {
                    const t = {};
                    if (this.consumeOptional("?"))
                        do {
                            this.parseQueryParam(t)
                        } while (this.consumeOptional("&"));
                    return t
                }
                parseFragment() {
                    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                }
                parseChildren() {
                    if ("" === this.remaining) return {};
                    this.consumeOptional("/");
                    const t = [];
                    for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                    let n = {};
                    this.peekStartsWith("/(") && (this.capture("/"), n = this.parseParens(!0));
                    let r = {};
                    return this.peekStartsWith("(") && (r = this.parseParens(!1)), (t.length > 0 || Object.keys(n).length > 0) && (r[Z] = new X(t, n)), r
                }
                parseSegment() {
                    const t = tl(this.remaining);
                    if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
                    return this.capture(t), new zo(el(t), this.parseMatrixParams())
                }
                parseMatrixParams() {
                    const t = {};
                    for (; this.consumeOptional(";");) this.parseParam(t);
                    return t
                }
                parseParam(t) {
                    const n = tl(this.remaining);
                    if (!n) return;
                    this.capture(n);
                    let r = "";
                    if (this.consumeOptional("=")) {
                        const i = tl(this.remaining);
                        i && (r = i, this.capture(r))
                    }
                    t[el(n)] = el(r)
                }
                parseQueryParam(t) {
                    const n = function (e) {
                        const t = e.match(uk);
                        return t ? t[0] : ""
                    }(this.remaining);
                    if (!n) return;
                    this.capture(n);
                    let r = "";
                    if (this.consumeOptional("=")) {
                        const l = function (e) {
                            const t = e.match(dk);
                            return t ? t[0] : ""
                        }(this.remaining);
                        l && (r = l, this.capture(r))
                    }
                    const i = pb(n),
                        a = pb(r);
                    if (t.hasOwnProperty(i)) {
                        let l = t[i];
                        Array.isArray(l) || (l = [l], t[i] = l), l.push(a)
                    } else t[i] = a
                }
                parseParens(t) {
                    const n = {};
                    for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                        const r = tl(this.remaining),
                            i = this.remaining[r.length];
                        if ("/" !== i && ")" !== i && ";" !== i) throw new Error(`Cannot parse url '${this.url}'`);
                        let a;
                        r.indexOf(":") > -1 ? (a = r.substr(0, r.indexOf(":")), this.capture(a), this.capture(":")) : t && (a = Z);
                        const l = this.parseChildren();
                        n[a] = 1 === Object.keys(l).length ? l[Z] : new X([], l), this.consumeOptional("//")
                    }
                    return n
                }
                peekStartsWith(t) {
                    return this.remaining.startsWith(t)
                }
                consumeOptional(t) {
                    return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
                }
                capture(t) {
                    if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
                }
            }
            class mb {
                constructor(t) {
                    this._root = t
                }
                get root() {
                    return this._root.value
                }
                parent(t) {
                    const n = this.pathFromRoot(t);
                    return n.length > 1 ? n[n.length - 2] : null
                }
                children(t) {
                    const n = Xd(t, this._root);
                    return n ? n.children.map(r => r.value) : []
                }
                firstChild(t) {
                    const n = Xd(t, this._root);
                    return n && n.children.length > 0 ? n.children[0].value : null
                }
                siblings(t) {
                    const n = ef(t, this._root);
                    return n.length < 2 ? [] : n[n.length - 2].children.map(i => i.value).filter(i => i !== t)
                }
                pathFromRoot(t) {
                    return ef(t, this._root).map(n => n.value)
                }
            }

            function Xd(e, t) {
                if (e === t.value) return t;
                for (const n of t.children) {
                    const r = Xd(e, n);
                    if (r) return r
                }
                return null
            }

            function ef(e, t) {
                if (e === t.value) return [t];
                for (const n of t.children) {
                    const r = ef(e, n);
                    if (r.length) return r.unshift(t), r
                }
                return []
            }
            class Rn {
                constructor(t, n) {
                    this.value = t, this.children = n
                }
                toString() {
                    return `TreeNode(${this.value})`
                }
            }

            function ki(e) {
                const t = {};
                return e && e.children.forEach(n => t[n.value.outlet] = n), t
            }
            class vb extends mb {
                constructor(t, n) {
                    super(t), this.snapshot = n, tf(this, t)
                }
                toString() {
                    return this.snapshot.toString()
                }
            }

            function yb(e, t) {
                const n = function (e, t) {
                        const l = new nl([], {}, {}, "", {}, Z, t, null, e.root, -1, {});
                        return new Cb("", new Rn(l, []))
                    }(e, t),
                    r = new nn([new zo("", {})]),
                    i = new nn({}),
                    a = new nn({}),
                    l = new nn({}),
                    u = new nn(""),
                    c = new Mi(r, i, l, u, a, Z, t, n.root);
                return c.snapshot = n.root, new vb(new Rn(c, []), n)
            }
            class Mi {
                constructor(t, n, r, i, a, l, u, c) {
                    this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = a, this.outlet = l, this.component = u, this._futureSnapshot = c
                }
                get routeConfig() {
                    return this._futureSnapshot.routeConfig
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = this.params.pipe(fe(t => Ti(t)))), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(fe(t => Ti(t)))), this._queryParamMap
                }
                toString() {
                    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
                }
            }

            function bb(e, t = "emptyOnly") {
                const n = e.pathFromRoot;
                let r = 0;
                if ("always" !== t)
                    for (r = n.length - 1; r >= 1;) {
                        const i = n[r],
                            a = n[r - 1];
                        if (i.routeConfig && "" === i.routeConfig.path) r--;
                        else {
                            if (a.component) break;
                            r--
                        }
                    }
                return function (e) {
                    return e.reduce((t, n) => ({
                        params: L(L({}, t.params), n.params),
                        data: L(L({}, t.data), n.data),
                        resolve: L(L({}, t.resolve), n._resolvedData)
                    }), {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(n.slice(r))
            }
            class nl {
                constructor(t, n, r, i, a, l, u, c, h, p, g) {
                    this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = a, this.outlet = l, this.component = u, this.routeConfig = c, this._urlSegment = h, this._lastPathIndex = p, this._resolve = g
                }
                get root() {
                    return this._routerState.root
                }
                get parent() {
                    return this._routerState.parent(this)
                }
                get firstChild() {
                    return this._routerState.firstChild(this)
                }
                get children() {
                    return this._routerState.children(this)
                }
                get pathFromRoot() {
                    return this._routerState.pathFromRoot(this)
                }
                get paramMap() {
                    return this._paramMap || (this._paramMap = Ti(this.params)), this._paramMap
                }
                get queryParamMap() {
                    return this._queryParamMap || (this._queryParamMap = Ti(this.queryParams)), this._queryParamMap
                }
                toString() {
                    return `Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
                }
            }
            class Cb extends mb {
                constructor(t, n) {
                    super(n), this.url = t, tf(this, n)
                }
                toString() {
                    return _b(this._root)
                }
            }

            function tf(e, t) {
                t.value._routerState = e, t.children.forEach(n => tf(e, n))
            }

            function _b(e) {
                const t = e.children.length > 0 ? ` { ${e.children.map(_b).join(", ")} } ` : "";
                return `${e.value}${t}`
            }

            function nf(e) {
                if (e.snapshot) {
                    const t = e.snapshot,
                        n = e._futureSnapshot;
                    e.snapshot = n, gn(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), gn(t.params, n.params) || e.params.next(n.params),
                        function (e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; ++n)
                                if (!gn(e[n], t[n])) return !1;
                            return !0
                        }(t.url, n.url) || e.url.next(n.url), gn(t.data, n.data) || e.data.next(n.data)
                } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
            }

            function rf(e, t) {
                const n = gn(e.params, t.params) && function (e, t) {
                    return Ir(e, t) && e.every((n, r) => gn(n.parameters, t[r].parameters))
                }(e.url, t.url);
                return n && !(!e.parent != !t.parent) && (!e.parent || rf(e.parent, t.parent))
            }

            function Qo(e, t, n) {
                if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
                    const r = n.value;
                    r._futureSnapshot = t.value;
                    const i = function (e, t, n) {
                        return t.children.map(r => {
                            for (const i of n.children)
                                if (e.shouldReuseRoute(r.value, i.value.snapshot)) return Qo(e, r, i);
                            return Qo(e, r)
                        })
                    }(e, t, n);
                    return new Rn(r, i)
                } {
                    if (e.shouldAttach(t.value)) {
                        const a = e.retrieve(t.value);
                        if (null !== a) {
                            const l = a.route;
                            return l.value._futureSnapshot = t.value, l.children = t.children.map(u => Qo(e, u)), l
                        }
                    }
                    const r = function (e) {
                            return new Mi(new nn(e.url), new nn(e.params), new nn(e.queryParams), new nn(e.fragment), new nn(e.data), e.outlet, e.component, e)
                        }(t.value),
                        i = t.children.map(a => Qo(e, a));
                    return new Rn(r, i)
                }
            }

            function rl(e) {
                return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
            }

            function Yo(e) {
                return "object" == typeof e && null != e && e.outlets
            }

            function of (e, t, n, r, i) {
                let a = {};
                return r && We(r, (l, u) => {
                    a[u] = Array.isArray(l) ? l.map(c => `${c}`) : `${l}`
                }), new Er(n.root === e ? t : wb(n.root, e, t), a, i)
            }

            function wb(e, t, n) {
                const r = {};
                return We(e.children, (i, a) => {
                    r[a] = i === t ? n : wb(i, t, n)
                }), new X(e.segments, r)
            }
            class Db {
                constructor(t, n, r) {
                    if (this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = r, t && r.length > 0 && rl(r[0])) throw new Error("Root segment cannot have matrix parameters");
                    const i = r.find(Yo);
                    if (i && i !== ob(r)) throw new Error("{outlets:{}} has to be the last command")
                }
                toRoot() {
                    return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                }
            }
            class sf {
                constructor(t, n, r) {
                    this.segmentGroup = t, this.processChildren = n, this.index = r
                }
            }

            function Eb(e, t, n) {
                if (e || (e = new X([], {})), 0 === e.segments.length && e.hasChildren()) return il(e, t, n);
                const r = function (e, t, n) {
                        let r = 0,
                            i = t;
                        const a = {
                            match: !1,
                            pathIndex: 0,
                            commandIndex: 0
                        };
                        for (; i < e.segments.length;) {
                            if (r >= n.length) return a;
                            const l = e.segments[i],
                                u = n[r];
                            if (Yo(u)) break;
                            const c = `${u}`,
                                h = r < n.length - 1 ? n[r + 1] : null;
                            if (i > 0 && void 0 === c) break;
                            if (c && h && "object" == typeof h && void 0 === h.outlets) {
                                if (!Ab(c, h, l)) return a;
                                r += 2
                            } else {
                                if (!Ab(c, {}, l)) return a;
                                r++
                            }
                            i++
                        }
                        return {
                            match: !0,
                            pathIndex: i,
                            commandIndex: r
                        }
                    }(e, t, n),
                    i = n.slice(r.commandIndex);
                if (r.match && r.pathIndex < e.segments.length) {
                    const a = new X(e.segments.slice(0, r.pathIndex), {});
                    return a.children[Z] = new X(e.segments.slice(r.pathIndex), e.children), il(a, 0, i)
                }
                return r.match && 0 === i.length ? new X(e.segments, {}) : r.match && !e.hasChildren() ? af(e, t, n) : r.match ? il(e, 0, i) : af(e, t, n)
            }

            function il(e, t, n) {
                if (0 === n.length) return new X(e.segments, {}); {
                    const r = function (e) {
                            return Yo(e[0]) ? e[0].outlets : {
                                [Z]: e
                            }
                        }(n),
                        i = {};
                    return We(r, (a, l) => {
                        "string" == typeof a && (a = [a]), null !== a && (i[l] = Eb(e.children[l], t, a))
                    }), We(e.children, (a, l) => {
                        void 0 === r[l] && (i[l] = a)
                    }), new X(e.segments, i)
                }
            }

            function af(e, t, n) {
                const r = e.segments.slice(0, t);
                let i = 0;
                for (; i < n.length;) {
                    const a = n[i];
                    if (Yo(a)) {
                        const c = Ik(a.outlets);
                        return new X(r, c)
                    }
                    if (0 === i && rl(n[0])) {
                        r.push(new zo(e.segments[t].path, Ib(n[0]))), i++;
                        continue
                    }
                    const l = Yo(a) ? a.outlets[Z] : `${a}`,
                        u = i < n.length - 1 ? n[i + 1] : null;
                    l && u && rl(u) ? (r.push(new zo(l, Ib(u))), i += 2) : (r.push(new zo(l, {})), i++)
                }
                return new X(r, {})
            }

            function Ik(e) {
                const t = {};
                return We(e, (n, r) => {
                    "string" == typeof n && (n = [n]), null !== n && (t[r] = af(new X([], {}), 0, n))
                }), t
            }

            function Ib(e) {
                const t = {};
                return We(e, (n, r) => t[r] = `${n}`), t
            }

            function Ab(e, t, n) {
                return e == n.path && gn(t, n.parameters)
            }
            class xk {
                constructor(t, n, r, i) {
                    this.routeReuseStrategy = t, this.futureState = n, this.currState = r, this.forwardEvent = i
                }
                activate(t) {
                    const n = this.futureState._root,
                        r = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(n, r, t), nf(this.futureState.root), this.activateChildRoutes(n, r, t)
                }
                deactivateChildRoutes(t, n, r) {
                    const i = ki(n);
                    t.children.forEach(a => {
                        const l = a.value.outlet;
                        this.deactivateRoutes(a, i[l], r), delete i[l]
                    }), We(i, (a, l) => {
                        this.deactivateRouteAndItsChildren(a, r)
                    })
                }
                deactivateRoutes(t, n, r) {
                    const i = t.value,
                        a = n ? n.value : null;
                    if (i === a)
                        if (i.component) {
                            const l = r.getContext(i.outlet);
                            l && this.deactivateChildRoutes(t, n, l.children)
                        } else this.deactivateChildRoutes(t, n, r);
                    else a && this.deactivateRouteAndItsChildren(n, r)
                }
                deactivateRouteAndItsChildren(t, n) {
                    this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, n) : this.deactivateRouteAndOutlet(t, n)
                }
                detachAndStoreRouteSubtree(t, n) {
                    const r = n.getContext(t.value.outlet),
                        i = r && t.value.component ? r.children : n,
                        a = ki(t);
                    for (const l of Object.keys(a)) this.deactivateRouteAndItsChildren(a[l], i);
                    if (r && r.outlet) {
                        const l = r.outlet.detach(),
                            u = r.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(t.value.snapshot, {
                            componentRef: l,
                            route: t,
                            contexts: u
                        })
                    }
                }
                deactivateRouteAndOutlet(t, n) {
                    const r = n.getContext(t.value.outlet),
                        i = r && t.value.component ? r.children : n,
                        a = ki(t);
                    for (const l of Object.keys(a)) this.deactivateRouteAndItsChildren(a[l], i);
                    r && r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated(), r.attachRef = null, r.resolver = null, r.route = null)
                }
                activateChildRoutes(t, n, r) {
                    const i = ki(n);
                    t.children.forEach(a => {
                        this.activateRoutes(a, i[a.value.outlet], r), this.forwardEvent(new GT(a.value.snapshot))
                    }), t.children.length && this.forwardEvent(new WT(t.value.snapshot))
                }
                activateRoutes(t, n, r) {
                    const i = t.value,
                        a = n ? n.value : null;
                    if (nf(i), i === a)
                        if (i.component) {
                            const l = r.getOrCreateContext(i.outlet);
                            this.activateChildRoutes(t, n, l.children)
                        } else this.activateChildRoutes(t, n, r);
                    else if (i.component) {
                        const l = r.getOrCreateContext(i.outlet);
                        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                            const u = this.routeReuseStrategy.retrieve(i.snapshot);
                            this.routeReuseStrategy.store(i.snapshot, null), l.children.onOutletReAttached(u.contexts), l.attachRef = u.componentRef, l.route = u.route.value, l.outlet && l.outlet.attach(u.componentRef, u.route.value), nf(u.route.value), this.activateChildRoutes(t, null, l.children)
                        } else {
                            const u = function (e) {
                                    for (let t = e.parent; t; t = t.parent) {
                                        const n = t.routeConfig;
                                        if (n && n._loadedConfig) return n._loadedConfig;
                                        if (n && n.component) return null
                                    }
                                    return null
                                }(i.snapshot),
                                c = u ? u.module.componentFactoryResolver : null;
                            l.attachRef = null, l.route = i, l.resolver = c, l.outlet && l.outlet.activateWith(i, c), this.activateChildRoutes(t, null, l.children)
                        }
                    } else this.activateChildRoutes(t, null, r)
                }
            }
            class lf {
                constructor(t, n) {
                    this.routes = t, this.module = n
                }
            }

            function Zn(e) {
                return "function" == typeof e
            }

            function Ar(e) {
                return e instanceof Er
            }
            const Ko = Symbol("INITIAL_VALUE");

            function Zo() {
                return Yn(e => function (...e) {
                    let t = null,
                        n = null;
                    return as(e[e.length - 1]) && (n = e.pop()), "function" == typeof e[e.length - 1] && (t = e.pop()), 1 === e.length && Df(e[0]) && (e = e[0]), pl(e, n).lift(new cT(t))
                }(e.map(t => t.pipe(Qd(1), function (...e) {
                    const t = e[e.length - 1];
                    return as(t) ? (e.pop(), n => zd(e, n, t)) : n => zd(e, n)
                }(Ko)))).pipe(Ky((t, n) => {
                    let r = !1;
                    return n.reduce((i, a, l) => i !== Ko ? i : (a === Ko && (r = !0), r || !1 !== a && l !== n.length - 1 && !Ar(a) ? i : a), t)
                }, Ko), _r(t => t !== Ko), fe(t => Ar(t) ? t : !0 === t), Qd(1)))
            }
            class Ok {
                constructor() {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new Jo, this.attachRef = null
                }
            }
            class Jo {
                constructor() {
                    this.contexts = new Map
                }
                onChildOutletCreated(t, n) {
                    const r = this.getOrCreateContext(t);
                    r.outlet = n, this.contexts.set(t, r)
                }
                onChildOutletDestroyed(t) {
                    const n = this.getContext(t);
                    n && (n.outlet = null, n.attachRef = null)
                }
                onOutletDeactivated() {
                    const t = this.contexts;
                    return this.contexts = new Map, t
                }
                onOutletReAttached(t) {
                    this.contexts = t
                }
                getOrCreateContext(t) {
                    let n = this.getContext(t);
                    return n || (n = new Ok, this.contexts.set(t, n)), n
                }
                getContext(t) {
                    return this.contexts.get(t) || null
                }
            }
            let uf = (() => {
                class e {
                    constructor(n, r, i, a, l) {
                        this.parentContexts = n, this.location = r, this.resolver = i, this.changeDetector = l, this.activated = null, this._activatedRoute = null, this.activateEvents = new st, this.deactivateEvents = new st, this.attachEvents = new st, this.detachEvents = new st, this.name = a || Z, n.onChildOutletCreated(this.name, this)
                    }
                    ngOnDestroy() {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }
                    ngOnInit() {
                        if (!this.activated) {
                            const n = this.parentContexts.getContext(this.name);
                            n && n.route && (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.resolver || null))
                        }
                    }
                    get isActivated() {
                        return !!this.activated
                    }
                    get component() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }
                    get activatedRoute() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }
                    get activatedRouteData() {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }
                    detach() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        const n = this.activated;
                        return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(n.instance), n
                    }
                    attach(n, r) {
                        this.activated = n, this._activatedRoute = r, this.location.insert(n.hostView), this.attachEvents.emit(n.instance)
                    }
                    deactivate() {
                        if (this.activated) {
                            const n = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(n)
                        }
                    }
                    activateWith(n, r) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = n;
                        const l = (r = r || this.resolver).resolveComponentFactory(n._futureSnapshot.routeConfig.component),
                            u = this.parentContexts.getOrCreateContext(this.name).children,
                            c = new Pk(n, u, this.location.injector);
                        this.activated = this.location.createComponent(l, this.location.length, c), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(F(Jo), F(Qt), F(pr), Gi("name"), F(Gc))
                }, e.\u0275dir = Qe({
                    type: e,
                    selectors: [
                        ["router-outlet"]
                    ],
                    outputs: {
                        activateEvents: "activate",
                        deactivateEvents: "deactivate",
                        attachEvents: "attach",
                        detachEvents: "detach"
                    },
                    exportAs: ["outlet"]
                }), e
            })();
            class Pk {
                constructor(t, n, r) {
                    this.route = t, this.childContexts = n, this.parent = r
                }
                get(t, n) {
                    return t === Mi ? this.route : t === Jo ? this.childContexts : this.parent.get(t, n)
                }
            }
            let xb = (() => {
                class e {}
                return e.\u0275fac = function (n) {
                    return new(n || e)
                }, e.\u0275cmp = ne({
                    type: e,
                    selectors: [
                        ["ng-component"]
                    ],
                    decls: 1,
                    vars: 0,
                    template: function (n, r) {
                        1 & n && f(0, "router-outlet")
                    },
                    directives: [uf],
                    encapsulation: 2
                }), e
            })();

            function Sb(e, t = "") {
                for (let n = 0; n < e.length; n++) {
                    const r = e[n];
                    Nk(r, Lk(t, r))
                }
            }

            function Nk(e, t) {
                e.children && Sb(e.children, t)
            }

            function Lk(e, t) {
                return t ? e || t.path ? e && !t.path ? `${e}/` : !e && t.path ? t.path : `${e}/${t.path}` : "" : e
            }

            function cf(e) {
                const t = e.children && e.children.map(cf),
                    n = t ? gt(L({}, e), {
                        children: t
                    }) : L({}, e);
                return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== Z && (n.component = xb), n
            }

            function Vt(e) {
                return e.outlet || Z
            }

            function Tb(e, t) {
                const n = e.filter(r => Vt(r) === t);
                return n.push(...e.filter(r => Vt(r) !== t)), n
            }
            const kb = {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {}
            };

            function ol(e, t, n) {
                var u;
                if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? L({}, kb) : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    parameters: {},
                    positionalParamSegments: {}
                };
                const i = (t.matcher || KT)(n, e, t);
                if (!i) return L({}, kb);
                const a = {};
                We(i.posParams, (c, h) => {
                    a[h] = c.path
                });
                const l = i.consumed.length > 0 ? L(L({}, a), i.consumed[i.consumed.length - 1].parameters) : a;
                return {
                    matched: !0,
                    consumedSegments: i.consumed,
                    lastChild: i.consumed.length,
                    parameters: l,
                    positionalParamSegments: null != (u = i.posParams) ? u : {}
                }
            }

            function sl(e, t, n, r, i = "corrected") {
                if (n.length > 0 && function (e, t, n) {
                        return n.some(r => al(e, t, r) && Vt(r) !== Z)
                    }(e, n, r)) {
                    const l = new X(t, function (e, t, n, r) {
                        const i = {};
                        i[Z] = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
                        for (const a of n)
                            if ("" === a.path && Vt(a) !== Z) {
                                const l = new X([], {});
                                l._sourceSegment = e, l._segmentIndexShift = t.length, i[Vt(a)] = l
                            } return i
                    }(e, t, r, new X(n, e.children)));
                    return l._sourceSegment = e, l._segmentIndexShift = t.length, {
                        segmentGroup: l,
                        slicedSegments: []
                    }
                }
                if (0 === n.length && function (e, t, n) {
                        return n.some(r => al(e, t, r))
                    }(e, n, r)) {
                    const l = new X(e.segments, function (e, t, n, r, i, a) {
                        const l = {};
                        for (const u of r)
                            if (al(e, n, u) && !i[Vt(u)]) {
                                const c = new X([], {});
                                c._sourceSegment = e, c._segmentIndexShift = "legacy" === a ? e.segments.length : t.length, l[Vt(u)] = c
                            } return L(L({}, i), l)
                    }(e, t, n, r, e.children, i));
                    return l._sourceSegment = e, l._segmentIndexShift = t.length, {
                        segmentGroup: l,
                        slicedSegments: n
                    }
                }
                const a = new X(e.segments, e.children);
                return a._sourceSegment = e, a._segmentIndexShift = t.length, {
                    segmentGroup: a,
                    slicedSegments: n
                }
            }

            function al(e, t, n) {
                return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path
            }

            function Mb(e, t, n, r) {
                return !!(Vt(e) === r || r !== Z && al(t, n, e)) && ("**" === e.path || ol(t, e, n).matched)
            }

            function Rb(e, t, n) {
                return 0 === t.length && !e.children[n]
            }
            class Xo {
                constructor(t) {
                    this.segmentGroup = t || null
                }
            }
            class Fb {
                constructor(t) {
                    this.urlTree = t
                }
            }

            function ll(e) {
                return new be(t => t.error(new Xo(e)))
            }

            function Ob(e) {
                return new be(t => t.error(new Fb(e)))
            }

            function Uk(e) {
                return new be(t => t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))
            }
            class Wk {
                constructor(t, n, r, i, a) {
                    this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = a, this.allowRedirects = !0, this.ngModule = t.get(pn)
                }
                apply() {
                    const t = sl(this.urlTree.root, [], [], this.config).segmentGroup,
                        n = new X(t.segments, t.children);
                    return this.expandSegmentGroup(this.ngModule, this.config, n, Z).pipe(fe(a => this.createUrlTree(df(a), this.urlTree.queryParams, this.urlTree.fragment))).pipe(wr(a => {
                        if (a instanceof Fb) return this.allowRedirects = !1, this.match(a.urlTree);
                        throw a instanceof Xo ? this.noMatchError(a) : a
                    }))
                }
                match(t) {
                    return this.expandSegmentGroup(this.ngModule, this.config, t.root, Z).pipe(fe(i => this.createUrlTree(df(i), t.queryParams, t.fragment))).pipe(wr(i => {
                        throw i instanceof Xo ? this.noMatchError(i) : i
                    }))
                }
                noMatchError(t) {
                    return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
                }
                createUrlTree(t, n, r) {
                    const i = t.segments.length > 0 ? new X([], {
                        [Z]: t
                    }) : t;
                    return new Er(i, n, r)
                }
                expandSegmentGroup(t, n, r, i) {
                    return 0 === r.segments.length && r.hasChildren() ? this.expandChildren(t, n, r).pipe(fe(a => new X([], a))) : this.expandSegment(t, r, n, r.segments, i, !0)
                }
                expandChildren(t, n, r) {
                    const i = [];
                    for (const a of Object.keys(r.children)) "primary" === a ? i.unshift(a) : i.push(a);
                    return ut(i).pipe(Wo(a => {
                        const l = r.children[a],
                            u = Tb(n, a);
                        return this.expandSegmentGroup(t, u, l, a).pipe(fe(c => ({
                            segment: c,
                            outlet: a
                        })))
                    }), Ky((a, l) => (a[l.outlet] = l.segment, a), {}), function (e, t) {
                        const n = arguments.length >= 2;
                        return r => r.pipe(e ? _r((i, a) => e(i, a, r)) : ss, Yd(1), n ? Jy(t) : Zy(() => new Ya))
                    }())
                }
                expandSegment(t, n, r, i, a, l) {
                    return ut(r).pipe(Wo(u => this.expandSegmentAgainstRoute(t, n, r, u, i, a, l).pipe(wr(h => {
                        if (h instanceof Xo) return q(null);
                        throw h
                    }))), Si(u => !!u), wr((u, c) => {
                        if (u instanceof Ya || "EmptyError" === u.name) {
                            if (Rb(n, i, a)) return q(new X([], {}));
                            throw new Xo(n)
                        }
                        throw u
                    }))
                }
                expandSegmentAgainstRoute(t, n, r, i, a, l, u) {
                    return Mb(i, n, a, l) ? void 0 === i.redirectTo ? this.matchSegmentAgainstRoute(t, n, i, a, l) : u && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, n, r, i, a, l) : ll(n) : ll(n)
                }
                expandSegmentAgainstRouteUsingRedirect(t, n, r, i, a, l) {
                    return "**" === i.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, r, i, l) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, n, r, i, a, l)
                }
                expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) {
                    const a = this.applyRedirectCommands([], r.redirectTo, {});
                    return r.redirectTo.startsWith("/") ? Ob(a) : this.lineralizeSegments(r, a).pipe($e(l => {
                        const u = new X(l, {});
                        return this.expandSegment(t, u, n, l, i, !1)
                    }))
                }
                expandRegularSegmentAgainstRouteUsingRedirect(t, n, r, i, a, l) {
                    const {
                        matched: u,
                        consumedSegments: c,
                        lastChild: h,
                        positionalParamSegments: p
                    } = ol(n, i, a);
                    if (!u) return ll(n);
                    const g = this.applyRedirectCommands(c, i.redirectTo, p);
                    return i.redirectTo.startsWith("/") ? Ob(g) : this.lineralizeSegments(i, g).pipe($e(m => this.expandSegment(t, n, r, m.concat(a.slice(h)), l, !1)))
                }
                matchSegmentAgainstRoute(t, n, r, i, a) {
                    if ("**" === r.path) return r.loadChildren ? (r._loadedConfig ? q(r._loadedConfig) : this.configLoader.load(t.injector, r)).pipe(fe(m => (r._loadedConfig = m, new X(i, {})))) : q(new X(i, {}));
                    const {
                        matched: l,
                        consumedSegments: u,
                        lastChild: c
                    } = ol(n, r, i);
                    if (!l) return ll(n);
                    const h = i.slice(c);
                    return this.getChildConfig(t, r, i).pipe($e(g => {
                        const m = g.module,
                            v = g.routes,
                            {
                                segmentGroup: y,
                                slicedSegments: C
                            } = sl(n, u, h, v),
                            b = new X(y.segments, y.children);
                        if (0 === C.length && b.hasChildren()) return this.expandChildren(m, v, b).pipe(fe(k => new X(u, k)));
                        if (0 === v.length && 0 === C.length) return q(new X(u, {}));
                        const w = Vt(r) === a;
                        return this.expandSegment(m, b, v, C, w ? Z : a, !0).pipe(fe(A => new X(u.concat(A.segments), A.children)))
                    }))
                }
                getChildConfig(t, n, r) {
                    return n.children ? q(new lf(n.children, t)) : n.loadChildren ? void 0 !== n._loadedConfig ? q(n._loadedConfig) : this.runCanLoadGuards(t.injector, n, r).pipe($e(i => i ? this.configLoader.load(t.injector, n).pipe(fe(a => (n._loadedConfig = a, a))) : function (e) {
                        return new be(t => t.error(Zd(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))
                    }(n))) : q(new lf([], t))
                }
                runCanLoadGuards(t, n, r) {
                    const i = n.canLoad;
                    if (!i || 0 === i.length) return q(!0);
                    const a = i.map(l => {
                        const u = t.get(l);
                        let c;
                        if (function (e) {
                                return e && Zn(e.canLoad)
                            }(u)) c = u.canLoad(n, r);
                        else {
                            if (!Zn(u)) throw new Error("Invalid CanLoad guard");
                            c = u(n, r)
                        }
                        return mn(c)
                    });
                    return q(a).pipe(Zo(), At(l => {
                        if (!Ar(l)) return;
                        const u = Zd(`Redirecting to "${this.urlSerializer.serialize(l)}"`);
                        throw u.url = l, u
                    }), fe(l => !0 === l))
                }
                lineralizeSegments(t, n) {
                    let r = [],
                        i = n.root;
                    for (;;) {
                        if (r = r.concat(i.segments), 0 === i.numberOfChildren) return q(r);
                        if (i.numberOfChildren > 1 || !i.children[Z]) return Uk(t.redirectTo);
                        i = i.children[Z]
                    }
                }
                applyRedirectCommands(t, n, r) {
                    return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), t, r)
                }
                applyRedirectCreatreUrlTree(t, n, r, i) {
                    const a = this.createSegmentGroup(t, n.root, r, i);
                    return new Er(a, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment)
                }
                createQueryParams(t, n) {
                    const r = {};
                    return We(t, (i, a) => {
                        if ("string" == typeof i && i.startsWith(":")) {
                            const u = i.substring(1);
                            r[a] = n[u]
                        } else r[a] = i
                    }), r
                }
                createSegmentGroup(t, n, r, i) {
                    const a = this.createSegments(t, n.segments, r, i);
                    let l = {};
                    return We(n.children, (u, c) => {
                        l[c] = this.createSegmentGroup(t, u, r, i)
                    }), new X(a, l)
                }
                createSegments(t, n, r, i) {
                    return n.map(a => a.path.startsWith(":") ? this.findPosParam(t, a, i) : this.findOrReturn(a, r))
                }
                findPosParam(t, n, r) {
                    const i = r[n.path.substring(1)];
                    if (!i) throw new Error(`Cannot redirect to '${t}'. Cannot find '${n.path}'.`);
                    return i
                }
                findOrReturn(t, n) {
                    let r = 0;
                    for (const i of n) {
                        if (i.path === t.path) return n.splice(r), i;
                        r++
                    }
                    return t
                }
            }

            function df(e) {
                const t = {};
                for (const r of Object.keys(e.children)) {
                    const a = df(e.children[r]);
                    (a.segments.length > 0 || a.hasChildren()) && (t[r] = a)
                }
                return function (e) {
                    if (1 === e.numberOfChildren && e.children[Z]) {
                        const t = e.children[Z];
                        return new X(e.segments.concat(t.segments), t.children)
                    }
                    return e
                }(new X(e.segments, t))
            }
            class Pb {
                constructor(t) {
                    this.path = t, this.route = this.path[this.path.length - 1]
                }
            }
            class ul {
                constructor(t, n) {
                    this.component = t, this.route = n
                }
            }

            function Qk(e, t, n) {
                const r = e._root;
                return es(r, t ? t._root : null, n, [r.value])
            }

            function cl(e, t, n) {
                const r = function (e) {
                    if (!e) return null;
                    for (let t = e.parent; t; t = t.parent) {
                        const n = t.routeConfig;
                        if (n && n._loadedConfig) return n._loadedConfig
                    }
                    return null
                }(t);
                return (r ? r.module.injector : n).get(e)
            }

            function es(e, t, n, r, i = {
                canDeactivateChecks: [],
                canActivateChecks: []
            }) {
                const a = ki(t);
                return e.children.forEach(l => {
                    (function (e, t, n, r, i = {
                        canDeactivateChecks: [],
                        canActivateChecks: []
                    }) {
                        const a = e.value,
                            l = t ? t.value : null,
                            u = n ? n.getContext(e.value.outlet) : null;
                        if (l && a.routeConfig === l.routeConfig) {
                            const c = function (e, t, n) {
                                if ("function" == typeof n) return n(e, t);
                                switch (n) {
                                    case "pathParamsChange":
                                        return !Ir(e.url, t.url);
                                    case "pathParamsOrQueryParamsChange":
                                        return !Ir(e.url, t.url) || !gn(e.queryParams, t.queryParams);
                                    case "always":
                                        return !0;
                                    case "paramsOrQueryParamsChange":
                                        return !rf(e, t) || !gn(e.queryParams, t.queryParams);
                                    default:
                                        return !rf(e, t)
                                }
                            }(l, a, a.routeConfig.runGuardsAndResolvers);
                            c ? i.canActivateChecks.push(new Pb(r)) : (a.data = l.data, a._resolvedData = l._resolvedData), es(e, t, a.component ? u ? u.children : null : n, r, i), c && u && u.outlet && u.outlet.isActivated && i.canDeactivateChecks.push(new ul(u.outlet.component, l))
                        } else l && ts(t, u, i), i.canActivateChecks.push(new Pb(r)), es(e, null, a.component ? u ? u.children : null : n, r, i)
                    })(l, a[l.value.outlet], n, r.concat([l.value]), i), delete a[l.value.outlet]
                }), We(a, (l, u) => ts(l, n.getContext(u), i)), i
            }

            function ts(e, t, n) {
                const r = ki(e),
                    i = e.value;
                We(r, (a, l) => {
                    ts(a, i.component ? t ? t.children.getContext(l) : null : t, n)
                }), n.canDeactivateChecks.push(new ul(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i))
            }
            class aM {}

            function Nb(e) {
                return new be(t => t.error(e))
            }
            class uM {
                constructor(t, n, r, i, a, l) {
                    this.rootComponentType = t, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = a, this.relativeLinkResolution = l
                }
                recognize() {
                    const t = sl(this.urlTree.root, [], [], this.config.filter(l => void 0 === l.redirectTo), this.relativeLinkResolution).segmentGroup,
                        n = this.processSegmentGroup(this.config, t, Z);
                    if (null === n) return null;
                    const r = new nl([], Object.freeze({}), Object.freeze(L({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Z, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        i = new Rn(r, n),
                        a = new Cb(this.url, i);
                    return this.inheritParamsAndData(a._root), a
                }
                inheritParamsAndData(t) {
                    const n = t.value,
                        r = bb(n, this.paramsInheritanceStrategy);
                    n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(i => this.inheritParamsAndData(i))
                }
                processSegmentGroup(t, n, r) {
                    return 0 === n.segments.length && n.hasChildren() ? this.processChildren(t, n) : this.processSegment(t, n, n.segments, r)
                }
                processChildren(t, n) {
                    const r = [];
                    for (const a of Object.keys(n.children)) {
                        const l = n.children[a],
                            u = Tb(t, a),
                            c = this.processSegmentGroup(u, l, a);
                        if (null === c) return null;
                        r.push(...c)
                    }
                    const i = Lb(r);
                    return function (e) {
                        e.sort((t, n) => t.value.outlet === Z ? -1 : n.value.outlet === Z ? 1 : t.value.outlet.localeCompare(n.value.outlet))
                    }(i), i
                }
                processSegment(t, n, r, i) {
                    for (const a of t) {
                        const l = this.processSegmentAgainstRoute(a, n, r, i);
                        if (null !== l) return l
                    }
                    return Rb(n, r, i) ? [] : null
                }
                processSegmentAgainstRoute(t, n, r, i) {
                    if (t.redirectTo || !Mb(t, n, r, i)) return null;
                    let a, l = [],
                        u = [];
                    if ("**" === t.path) {
                        const v = r.length > 0 ? ob(r).parameters : {};
                        a = new nl(r, v, Object.freeze(L({}, this.urlTree.queryParams)), this.urlTree.fragment, Bb(t), Vt(t), t.component, t, Vb(n), jb(n) + r.length, Hb(t))
                    } else {
                        const v = ol(n, t, r);
                        if (!v.matched) return null;
                        l = v.consumedSegments, u = r.slice(v.lastChild), a = new nl(l, v.parameters, Object.freeze(L({}, this.urlTree.queryParams)), this.urlTree.fragment, Bb(t), Vt(t), t.component, t, Vb(n), jb(n) + l.length, Hb(t))
                    }
                    const c = function (e) {
                            return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                        }(t),
                        {
                            segmentGroup: h,
                            slicedSegments: p
                        } = sl(n, l, u, c.filter(v => void 0 === v.redirectTo), this.relativeLinkResolution);
                    if (0 === p.length && h.hasChildren()) {
                        const v = this.processChildren(c, h);
                        return null === v ? null : [new Rn(a, v)]
                    }
                    if (0 === c.length && 0 === p.length) return [new Rn(a, [])];
                    const g = Vt(t) === i,
                        m = this.processSegment(c, h, p, g ? Z : i);
                    return null === m ? null : [new Rn(a, m)]
                }
            }

            function fM(e) {
                const t = e.value.routeConfig;
                return t && "" === t.path && void 0 === t.redirectTo
            }

            function Lb(e) {
                const t = [],
                    n = new Set;
                for (const r of e) {
                    if (!fM(r)) {
                        t.push(r);
                        continue
                    }
                    const i = t.find(a => r.value.routeConfig === a.value.routeConfig);
                    void 0 !== i ? (i.children.push(...r.children), n.add(i)) : t.push(r)
                }
                for (const r of n) {
                    const i = Lb(r.children);
                    t.push(new Rn(r.value, i))
                }
                return t.filter(r => !n.has(r))
            }

            function Vb(e) {
                let t = e;
                for (; t._sourceSegment;) t = t._sourceSegment;
                return t
            }

            function jb(e) {
                let t = e,
                    n = t._segmentIndexShift ? t._segmentIndexShift : 0;
                for (; t._sourceSegment;) t = t._sourceSegment, n += t._segmentIndexShift ? t._segmentIndexShift : 0;
                return n - 1
            }

            function Bb(e) {
                return e.data || {}
            }

            function Hb(e) {
                return e.resolve || {}
            }

            function ff(e) {
                return Yn(t => {
                    const n = e(t);
                    return n ? ut(n).pipe(fe(() => t)) : q(t)
                })
            }
            class CM extends class {
                shouldDetach(t) {
                    return !1
                }
                store(t, n) {}
                shouldAttach(t) {
                    return !1
                }
                retrieve(t) {
                    return null
                }
                shouldReuseRoute(t, n) {
                    return t.routeConfig === n.routeConfig
                }
            } {}
            const hf = new te("ROUTES");
            class Ub {
                constructor(t, n, r, i) {
                    this.injector = t, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i
                }
                load(t, n) {
                    if (n._loader$) return n._loader$;
                    this.onLoadStartListener && this.onLoadStartListener(n);
                    const i = this.loadModuleFactory(n.loadChildren).pipe(fe(a => {
                        this.onLoadEndListener && this.onLoadEndListener(n);
                        const l = a.create(t);
                        return new lf(ib(l.injector.get(hf, void 0, O.Self | O.Optional)).map(cf), l)
                    }), wr(a => {
                        throw n._loader$ = void 0, a
                    }));
                    return n._loader$ = new Pf(i, () => new vn).pipe(gl()), n._loader$
                }
                loadModuleFactory(t) {
                    return mn(t()).pipe($e(n => n instanceof x1 ? q(n) : ut(this.compiler.compileModuleAsync(n))))
                }
            }
            class wM {
                shouldProcessUrl(t) {
                    return !0
                }
                extract(t) {
                    return t
                }
                merge(t, n) {
                    return t
                }
            }

            function DM(e) {
                throw e
            }

            function EM(e, t, n) {
                return t.parse("/")
            }

            function $b(e, t) {
                return q(null)
            }
            const IM = {
                    paths: "exact",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "exact"
                },
                AM = {
                    paths: "subset",
                    fragment: "ignored",
                    matrixParams: "ignored",
                    queryParams: "subset"
                };
            let pt = (() => {
                class e {
                    constructor(n, r, i, a, l, u, c) {
                        this.rootComponentType = n, this.urlSerializer = r, this.rootContexts = i, this.location = a, this.config = c, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.disposed = !1, this.navigationId = 0, this.currentPageId = 0, this.isNgZoneEnabled = !1, this.events = new vn, this.errorHandler = DM, this.malformedUriErrorHandler = EM, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: $b,
                            afterPreactivation: $b
                        }, this.urlHandlingStrategy = new wM, this.routeReuseStrategy = new CM, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "corrected", this.canceledNavigationResolution = "replace", this.ngModule = l.get(pn), this.console = l.get(ya);
                        const g = l.get(ke);
                        this.isNgZoneEnabled = g instanceof ke && ke.isInAngularZone(), this.resetConfig(c), this.currentUrlTree = new Er(new X([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Ub(l, u, m => this.triggerEvent(new Xy(m)), m => this.triggerEvent(new eb(m))), this.routerState = yb(this.currentUrlTree, this.rootComponentType), this.transitions = new nn({
                            id: 0,
                            targetPageId: 0,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.currentUrlTree,
                            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            rawUrl: this.currentUrlTree,
                            extras: {},
                            resolve: null,
                            reject: null,
                            promise: Promise.resolve(!0),
                            source: "imperative",
                            restoredState: null,
                            currentSnapshot: this.routerState.snapshot,
                            targetSnapshot: null,
                            currentRouterState: this.routerState,
                            targetRouterState: null,
                            guards: {
                                canActivateChecks: [],
                                canDeactivateChecks: []
                            },
                            guardsResult: null
                        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                    }
                    get browserPageId() {
                        var n;
                        return null == (n = this.location.getState()) ? void 0 : n.\u0275routerPageId
                    }
                    setupNavigations(n) {
                        const r = this.events;
                        return n.pipe(_r(i => 0 !== i.id), fe(i => gt(L({}, i), {
                            extractedUrl: this.urlHandlingStrategy.extract(i.rawUrl)
                        })), Yn(i => {
                            let a = !1,
                                l = !1;
                            return q(i).pipe(At(u => {
                                this.currentNavigation = {
                                    id: u.id,
                                    initialUrl: u.currentRawUrl,
                                    extractedUrl: u.extractedUrl,
                                    trigger: u.source,
                                    extras: u.extras,
                                    previousNavigation: this.lastSuccessfulNavigation ? gt(L({}, this.lastSuccessfulNavigation), {
                                        previousNavigation: null
                                    }) : null
                                }
                            }), Yn(u => {
                                const c = this.browserUrlTree.toString(),
                                    h = !this.navigated || u.extractedUrl.toString() !== c || c !== this.currentUrlTree.toString();
                                if (("reload" === this.onSameUrlNavigation || h) && this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl)) return dl(u.source) && (this.browserUrlTree = u.extractedUrl), q(u).pipe(Yn(g => {
                                    const m = this.transitions.getValue();
                                    return r.next(new Ka(g.id, this.serializeUrl(g.extractedUrl), g.source, g.restoredState)), m !== this.transitions.getValue() ? xi : Promise.resolve(g)
                                }), function (e, t, n, r) {
                                    return Yn(i => function (e, t, n, r, i) {
                                        return new Wk(e, t, n, r, i).apply()
                                    }(e, t, n, i.extractedUrl, r).pipe(fe(a => gt(L({}, i), {
                                        urlAfterRedirects: a
                                    }))))
                                }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), At(g => {
                                    this.currentNavigation = gt(L({}, this.currentNavigation), {
                                        finalUrl: g.urlAfterRedirects
                                    })
                                }), function (e, t, n, r, i) {
                                    return $e(a => function (e, t, n, r, i = "emptyOnly", a = "legacy") {
                                        try {
                                            const l = new uM(e, t, n, r, i, a).recognize();
                                            return null === l ? Nb(new aM) : q(l)
                                        } catch (l) {
                                            return Nb(l)
                                        }
                                    }(e, t, a.urlAfterRedirects, n(a.urlAfterRedirects), r, i).pipe(fe(l => gt(L({}, a), {
                                        targetSnapshot: l
                                    }))))
                                }(this.rootComponentType, this.config, g => this.serializeUrl(g), this.paramsInheritanceStrategy, this.relativeLinkResolution), At(g => {
                                    if ("eager" === this.urlUpdateStrategy) {
                                        if (!g.extras.skipLocationChange) {
                                            const v = this.urlHandlingStrategy.merge(g.urlAfterRedirects, g.rawUrl);
                                            this.setBrowserUrl(v, g)
                                        }
                                        this.browserUrlTree = g.urlAfterRedirects
                                    }
                                    const m = new jT(g.id, this.serializeUrl(g.extractedUrl), this.serializeUrl(g.urlAfterRedirects), g.targetSnapshot);
                                    r.next(m)
                                }));
                                if (h && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                    const {
                                        id: m,
                                        extractedUrl: v,
                                        source: y,
                                        restoredState: C,
                                        extras: b
                                    } = u, w = new Ka(m, this.serializeUrl(v), y, C);
                                    r.next(w);
                                    const _ = yb(v, this.rootComponentType).snapshot;
                                    return q(gt(L({}, u), {
                                        targetSnapshot: _,
                                        urlAfterRedirects: v,
                                        extras: gt(L({}, b), {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return this.rawUrlTree = u.rawUrl, u.resolve(null), xi
                            }), ff(u => {
                                const {
                                    targetSnapshot: c,
                                    id: h,
                                    extractedUrl: p,
                                    rawUrl: g,
                                    extras: {
                                        skipLocationChange: m,
                                        replaceUrl: v
                                    }
                                } = u;
                                return this.hooks.beforePreactivation(c, {
                                    navigationId: h,
                                    appliedUrlTree: p,
                                    rawUrlTree: g,
                                    skipLocationChange: !!m,
                                    replaceUrl: !!v
                                })
                            }), At(u => {
                                const c = new BT(u.id, this.serializeUrl(u.extractedUrl), this.serializeUrl(u.urlAfterRedirects), u.targetSnapshot);
                                this.triggerEvent(c)
                            }), fe(u => gt(L({}, u), {
                                guards: Qk(u.targetSnapshot, u.currentSnapshot, this.rootContexts)
                            })), function (e, t) {
                                return $e(n => {
                                    const {
                                        targetSnapshot: r,
                                        currentSnapshot: i,
                                        guards: {
                                            canActivateChecks: a,
                                            canDeactivateChecks: l
                                        }
                                    } = n;
                                    return 0 === l.length && 0 === a.length ? q(gt(L({}, n), {
                                        guardsResult: !0
                                    })) : function (e, t, n, r) {
                                        return ut(e).pipe($e(i => function (e, t, n, r, i) {
                                            const a = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                                            return a && 0 !== a.length ? q(a.map(u => {
                                                const c = cl(u, t, i);
                                                let h;
                                                if (function (e) {
                                                        return e && Zn(e.canDeactivate)
                                                    }(c)) h = mn(c.canDeactivate(e, t, n, r));
                                                else {
                                                    if (!Zn(c)) throw new Error("Invalid CanDeactivate guard");
                                                    h = mn(c(e, t, n, r))
                                                }
                                                return h.pipe(Si())
                                            })).pipe(Zo()) : q(!0)
                                        }(i.component, i.route, n, t, r)), Si(i => !0 !== i, !0))
                                    }(l, r, i, e).pipe($e(u => u && function (e) {
                                        return "boolean" == typeof e
                                    }(u) ? function (e, t, n, r) {
                                        return ut(t).pipe(Wo(i => zd(function (e, t) {
                                            return null !== e && t && t(new qT(e)), q(!0)
                                        }(i.route.parent, r), function (e, t) {
                                            return null !== e && t && t(new zT(e)), q(!0)
                                        }(i.route, r), function (e, t, n) {
                                            const r = t[t.length - 1],
                                                a = t.slice(0, t.length - 1).reverse().map(l => function (e) {
                                                    const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                                                    return t && 0 !== t.length ? {
                                                        node: e,
                                                        guards: t
                                                    } : null
                                                }(l)).filter(l => null !== l).map(l => Qy(() => q(l.guards.map(c => {
                                                    const h = cl(c, l.node, n);
                                                    let p;
                                                    if (function (e) {
                                                            return e && Zn(e.canActivateChild)
                                                        }(h)) p = mn(h.canActivateChild(r, e));
                                                    else {
                                                        if (!Zn(h)) throw new Error("Invalid CanActivateChild guard");
                                                        p = mn(h(r, e))
                                                    }
                                                    return p.pipe(Si())
                                                })).pipe(Zo())));
                                            return q(a).pipe(Zo())
                                        }(e, i.path, n), function (e, t, n) {
                                            const r = t.routeConfig ? t.routeConfig.canActivate : null;
                                            if (!r || 0 === r.length) return q(!0);
                                            const i = r.map(a => Qy(() => {
                                                const l = cl(a, t, n);
                                                let u;
                                                if (function (e) {
                                                        return e && Zn(e.canActivate)
                                                    }(l)) u = mn(l.canActivate(t, e));
                                                else {
                                                    if (!Zn(l)) throw new Error("Invalid CanActivate guard");
                                                    u = mn(l(t, e))
                                                }
                                                return u.pipe(Si())
                                            }));
                                            return q(i).pipe(Zo())
                                        }(e, i.route, n))), Si(i => !0 !== i, !0))
                                    }(r, a, e, t) : q(u)), fe(u => gt(L({}, n), {
                                        guardsResult: u
                                    })))
                                })
                            }(this.ngModule.injector, u => this.triggerEvent(u)), At(u => {
                                if (Ar(u.guardsResult)) {
                                    const h = Zd(`Redirecting to "${this.serializeUrl(u.guardsResult)}"`);
                                    throw h.url = u.guardsResult, h
                                }
                                const c = new HT(u.id, this.serializeUrl(u.extractedUrl), this.serializeUrl(u.urlAfterRedirects), u.targetSnapshot, !!u.guardsResult);
                                this.triggerEvent(c)
                            }), _r(u => !!u.guardsResult || (this.restoreHistory(u), this.cancelNavigationTransition(u, ""), !1)), ff(u => {
                                if (u.guards.canActivateChecks.length) return q(u).pipe(At(c => {
                                    const h = new UT(c.id, this.serializeUrl(c.extractedUrl), this.serializeUrl(c.urlAfterRedirects), c.targetSnapshot);
                                    this.triggerEvent(h)
                                }), Yn(c => {
                                    let h = !1;
                                    return q(c).pipe(function (e, t) {
                                        return $e(n => {
                                            const {
                                                targetSnapshot: r,
                                                guards: {
                                                    canActivateChecks: i
                                                }
                                            } = n;
                                            if (!i.length) return q(n);
                                            let a = 0;
                                            return ut(i).pipe(Wo(l => function (e, t, n, r) {
                                                return function (e, t, n, r) {
                                                    const i = Object.keys(e);
                                                    if (0 === i.length) return q({});
                                                    const a = {};
                                                    return ut(i).pipe($e(l => function (e, t, n, r) {
                                                        const i = cl(e, t, r);
                                                        return mn(i.resolve ? i.resolve(t, n) : i(t, n))
                                                    }(e[l], t, n, r).pipe(At(u => {
                                                        a[l] = u
                                                    }))), Yd(1), $e(() => Object.keys(a).length === i.length ? q(a) : xi))
                                                }(e._resolve, e, t, r).pipe(fe(a => (e._resolvedData = a, e.data = L(L({}, e.data), bb(e, n).resolve), null)))
                                            }(l.route, r, e, t)), At(() => a++), Yd(1), $e(l => a === i.length ? q(n) : xi))
                                        })
                                    }(this.paramsInheritanceStrategy, this.ngModule.injector), At({
                                        next: () => h = !0,
                                        complete: () => {
                                            h || (this.restoreHistory(c), this.cancelNavigationTransition(c, "At least one route resolver didn't emit any value."))
                                        }
                                    }))
                                }), At(c => {
                                    const h = new $T(c.id, this.serializeUrl(c.extractedUrl), this.serializeUrl(c.urlAfterRedirects), c.targetSnapshot);
                                    this.triggerEvent(h)
                                }))
                            }), ff(u => {
                                const {
                                    targetSnapshot: c,
                                    id: h,
                                    extractedUrl: p,
                                    rawUrl: g,
                                    extras: {
                                        skipLocationChange: m,
                                        replaceUrl: v
                                    }
                                } = u;
                                return this.hooks.afterPreactivation(c, {
                                    navigationId: h,
                                    appliedUrlTree: p,
                                    rawUrlTree: g,
                                    skipLocationChange: !!m,
                                    replaceUrl: !!v
                                })
                            }), fe(u => {
                                const c = function (e, t, n) {
                                    const r = Qo(e, t._root, n ? n._root : void 0);
                                    return new vb(r, t)
                                }(this.routeReuseStrategy, u.targetSnapshot, u.currentRouterState);
                                return gt(L({}, u), {
                                    targetRouterState: c
                                })
                            }), At(u => {
                                this.currentUrlTree = u.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(u.urlAfterRedirects, u.rawUrl), this.routerState = u.targetRouterState, "deferred" === this.urlUpdateStrategy && (u.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, u), this.browserUrlTree = u.urlAfterRedirects)
                            }), ((e, t, n) => fe(r => (new xk(t, r.targetRouterState, r.currentRouterState, n).activate(e), r)))(this.rootContexts, this.routeReuseStrategy, u => this.triggerEvent(u)), At({
                                next() {
                                    a = !0
                                },
                                complete() {
                                    a = !0
                                }
                            }), function (e) {
                                return t => t.lift(new NT(e))
                            }(() => {
                                var u;
                                a || l || this.cancelNavigationTransition(i, `Navigation ID ${i.id} is not equal to the current navigation id ${this.navigationId}`), (null == (u = this.currentNavigation) ? void 0 : u.id) === i.id && (this.currentNavigation = null)
                            }), wr(u => {
                                if (l = !0, function (e) {
                                        return e && e[nb]
                                    }(u)) {
                                    const c = Ar(u.url);
                                    c || (this.navigated = !0, this.restoreHistory(i, !0));
                                    const h = new Kd(i.id, this.serializeUrl(i.extractedUrl), u.message);
                                    r.next(h), c ? setTimeout(() => {
                                        const p = this.urlHandlingStrategy.merge(u.url, this.rawUrlTree),
                                            g = {
                                                skipLocationChange: i.extras.skipLocationChange,
                                                replaceUrl: "eager" === this.urlUpdateStrategy || dl(i.source)
                                            };
                                        this.scheduleNavigation(p, "imperative", null, g, {
                                            resolve: i.resolve,
                                            reject: i.reject,
                                            promise: i.promise
                                        })
                                    }, 0) : i.resolve(!1)
                                } else {
                                    this.restoreHistory(i, !0);
                                    const c = new VT(i.id, this.serializeUrl(i.extractedUrl), u);
                                    r.next(c);
                                    try {
                                        i.resolve(this.errorHandler(u))
                                    } catch (h) {
                                        i.reject(h)
                                    }
                                }
                                return xi
                            }))
                        }))
                    }
                    resetRootComponentType(n) {
                        this.rootComponentType = n, this.routerState.root.component = this.rootComponentType
                    }
                    setTransition(n) {
                        this.transitions.next(L(L({}, this.transitions.value), n))
                    }
                    initialNavigation() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }
                    setUpLocationChangeListener() {
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(n => {
                            const r = "popstate" === n.type ? "popstate" : "hashchange";
                            "popstate" === r && setTimeout(() => {
                                var u;
                                const i = {
                                        replaceUrl: !0
                                    },
                                    a = (null == (u = n.state) ? void 0 : u.navigationId) ? n.state : null;
                                if (a) {
                                    const c = L({}, a);
                                    delete c.navigationId, delete c.\u0275routerPageId, 0 !== Object.keys(c).length && (i.state = c)
                                }
                                const l = this.parseUrl(n.url);
                                this.scheduleNavigation(l, r, a, i)
                            }, 0)
                        }))
                    }
                    get url() {
                        return this.serializeUrl(this.currentUrlTree)
                    }
                    getCurrentNavigation() {
                        return this.currentNavigation
                    }
                    triggerEvent(n) {
                        this.events.next(n)
                    }
                    resetConfig(n) {
                        Sb(n), this.config = n.map(cf), this.navigated = !1, this.lastSuccessfulId = -1
                    }
                    ngOnDestroy() {
                        this.dispose()
                    }
                    dispose() {
                        this.transitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0
                    }
                    createUrlTree(n, r = {}) {
                        const {
                            relativeTo: i,
                            queryParams: a,
                            fragment: l,
                            queryParamsHandling: u,
                            preserveFragment: c
                        } = r, h = i || this.routerState.root, p = c ? this.currentUrlTree.fragment : l;
                        let g = null;
                        switch (u) {
                            case "merge":
                                g = L(L({}, this.currentUrlTree.queryParams), a);
                                break;
                            case "preserve":
                                g = this.currentUrlTree.queryParams;
                                break;
                            default:
                                g = a || null
                        }
                        return null !== g && (g = this.removeEmptyProps(g)),
                            function (e, t, n, r, i) {
                                if (0 === n.length) return of(t.root, t.root, t, r, i);
                                const a = function (e) {
                                    if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new Db(!0, 0, e);
                                    let t = 0,
                                        n = !1;
                                    const r = e.reduce((i, a, l) => {
                                        if ("object" == typeof a && null != a) {
                                            if (a.outlets) {
                                                const u = {};
                                                return We(a.outlets, (c, h) => {
                                                    u[h] = "string" == typeof c ? c.split("/") : c
                                                }), [...i, {
                                                    outlets: u
                                                }]
                                            }
                                            if (a.segmentPath) return [...i, a.segmentPath]
                                        }
                                        return "string" != typeof a ? [...i, a] : 0 === l ? (a.split("/").forEach((u, c) => {
                                            0 == c && "." === u || (0 == c && "" === u ? n = !0 : ".." === u ? t++ : "" != u && i.push(u))
                                        }), i) : [...i, a]
                                    }, []);
                                    return new Db(n, t, r)
                                }(n);
                                if (a.toRoot()) return of(t.root, new X([], {}), t, r, i);
                                const l = function (e, t, n) {
                                        if (e.isAbsolute) return new sf(t.root, !0, 0);
                                        if (-1 === n.snapshot._lastPathIndex) {
                                            const a = n.snapshot._urlSegment;
                                            return new sf(a, a === t.root, 0)
                                        }
                                        const r = rl(e.commands[0]) ? 0 : 1;
                                        return function (e, t, n) {
                                            let r = e,
                                                i = t,
                                                a = n;
                                            for (; a > i;) {
                                                if (a -= i, r = r.parent, !r) throw new Error("Invalid number of '../'");
                                                i = r.segments.length
                                            }
                                            return new sf(r, !1, i - a)
                                        }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                                    }(a, t, e),
                                    u = l.processChildren ? il(l.segmentGroup, l.index, a.commands) : Eb(l.segmentGroup, l.index, a.commands);
                                return of(l.segmentGroup, u, t, r, i)
                            }(h, this.currentUrlTree, n, g, null != p ? p : null)
                    }
                    navigateByUrl(n, r = {
                        skipLocationChange: !1
                    }) {
                        const i = Ar(n) ? n : this.parseUrl(n),
                            a = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
                        return this.scheduleNavigation(a, "imperative", null, r)
                    }
                    navigate(n, r = {
                        skipLocationChange: !1
                    }) {
                        return function (e) {
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t];
                                if (null == n) throw new Error(`The requested path contains ${n} segment at index ${t}`)
                            }
                        }(n), this.navigateByUrl(this.createUrlTree(n, r), r)
                    }
                    serializeUrl(n) {
                        return this.urlSerializer.serialize(n)
                    }
                    parseUrl(n) {
                        let r;
                        try {
                            r = this.urlSerializer.parse(n)
                        } catch (i) {
                            r = this.malformedUriErrorHandler(i, this.urlSerializer, n)
                        }
                        return r
                    }
                    isActive(n, r) {
                        let i;
                        if (i = !0 === r ? L({}, IM) : !1 === r ? L({}, AM) : r, Ar(n)) return ab(this.currentUrlTree, n, i);
                        const a = this.parseUrl(n);
                        return ab(this.currentUrlTree, a, i)
                    }
                    removeEmptyProps(n) {
                        return Object.keys(n).reduce((r, i) => {
                            const a = n[i];
                            return null != a && (r[i] = a), r
                        }, {})
                    }
                    processNavigations() {
                        this.navigations.subscribe(n => {
                            this.navigated = !0, this.lastSuccessfulId = n.id, this.currentPageId = n.targetPageId, this.events.next(new Dr(n.id, this.serializeUrl(n.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, n.resolve(!0)
                        }, n => {
                            this.console.warn(`Unhandled Navigation Error: ${n}`)
                        })
                    }
                    scheduleNavigation(n, r, i, a, l) {
                        var w, _, A;
                        if (this.disposed) return Promise.resolve(!1);
                        const u = this.transitions.value,
                            c = dl(r) && u && !dl(u.source),
                            h = u.rawUrl.toString() === n.toString(),
                            p = u.id === (null == (w = this.currentNavigation) ? void 0 : w.id);
                        if (c && h && p) return Promise.resolve(!0);
                        let m, v, y;
                        l ? (m = l.resolve, v = l.reject, y = l.promise) : y = new Promise((k, W) => {
                            m = k, v = W
                        });
                        const C = ++this.navigationId;
                        let b;
                        return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (i = this.location.getState()), b = i && i.\u0275routerPageId ? i.\u0275routerPageId : a.replaceUrl || a.skipLocationChange ? null != (_ = this.browserPageId) ? _ : 0 : (null != (A = this.browserPageId) ? A : 0) + 1) : b = 0, this.setTransition({
                            id: C,
                            targetPageId: b,
                            source: r,
                            restoredState: i,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: n,
                            extras: a,
                            resolve: m,
                            reject: v,
                            promise: y,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), y.catch(k => Promise.reject(k))
                    }
                    setBrowserUrl(n, r) {
                        const i = this.urlSerializer.serialize(n),
                            a = L(L({}, r.extras.state), this.generateNgRouterState(r.id, r.targetPageId));
                        this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl ? this.location.replaceState(i, "", a) : this.location.go(i, "", a)
                    }
                    restoreHistory(n, r = !1) {
                        var i, a;
                        if ("computed" === this.canceledNavigationResolution) {
                            const l = this.currentPageId - n.targetPageId;
                            "popstate" !== n.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== (null == (i = this.currentNavigation) ? void 0 : i.finalUrl) || 0 === l ? this.currentUrlTree === (null == (a = this.currentNavigation) ? void 0 : a.finalUrl) && 0 === l && (this.resetState(n), this.browserUrlTree = n.currentUrlTree, this.resetUrlToCurrentUrlTree()) : this.location.historyGo(l)
                        } else "replace" === this.canceledNavigationResolution && (r && this.resetState(n), this.resetUrlToCurrentUrlTree())
                    }
                    resetState(n) {
                        this.routerState = n.currentRouterState, this.currentUrlTree = n.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n.rawUrl)
                    }
                    resetUrlToCurrentUrlTree() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                    }
                    cancelNavigationTransition(n, r) {
                        const i = new Kd(n.id, this.serializeUrl(n.extractedUrl), r);
                        this.triggerEvent(i), n.resolve(!1)
                    }
                    generateNgRouterState(n, r) {
                        return "computed" === this.canceledNavigationResolution ? {
                            navigationId: n,
                            \u0275routerPageId: r
                        } : {
                            navigationId: n
                        }
                    }
                }
                return e.\u0275fac = function (n) {
                    rc()
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function dl(e) {
                return "imperative" !== e
            }
            let pf = (() => {
                    class e {
                        constructor(n, r, i, a, l) {
                            this.router = n, this.route = r, this.tabIndexAttribute = i, this.renderer = a, this.el = l, this.commands = null, this.onChanges = new vn, this.setTabIndexIfNotOnNativeEl("0")
                        }
                        setTabIndexIfNotOnNativeEl(n) {
                            if (null != this.tabIndexAttribute) return;
                            const r = this.renderer,
                                i = this.el.nativeElement;
                            null !== n ? r.setAttribute(i, "tabindex", n) : r.removeAttribute(i, "tabindex")
                        }
                        ngOnChanges(n) {
                            this.onChanges.next(this)
                        }
                        set routerLink(n) {
                            null != n ? (this.commands = Array.isArray(n) ? n : [n], this.setTabIndexIfNotOnNativeEl("0")) : (this.commands = null, this.setTabIndexIfNotOnNativeEl(null))
                        }
                        onClick() {
                            if (null === this.urlTree) return !0;
                            const n = {
                                skipLocationChange: Ri(this.skipLocationChange),
                                replaceUrl: Ri(this.replaceUrl),
                                state: this.state
                            };
                            return this.router.navigateByUrl(this.urlTree, n), !0
                        }
                        get urlTree() {
                            return null === this.commands ? null : this.router.createUrlTree(this.commands, {
                                relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                                queryParams: this.queryParams,
                                fragment: this.fragment,
                                queryParamsHandling: this.queryParamsHandling,
                                preserveFragment: Ri(this.preserveFragment)
                            })
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(F(pt), F(Mi), Gi("tabindex"), F(da), F(It))
                    }, e.\u0275dir = Qe({
                        type: e,
                        selectors: [
                            ["", "routerLink", "", 5, "a", 5, "area"]
                        ],
                        hostBindings: function (n, r) {
                            1 & n && na("click", function () {
                                return r.onClick()
                            })
                        },
                        inputs: {
                            queryParams: "queryParams",
                            fragment: "fragment",
                            queryParamsHandling: "queryParamsHandling",
                            preserveFragment: "preserveFragment",
                            skipLocationChange: "skipLocationChange",
                            replaceUrl: "replaceUrl",
                            state: "state",
                            relativeTo: "relativeTo",
                            routerLink: "routerLink"
                        },
                        features: [or]
                    }), e
                })(),
                le = (() => {
                    class e {
                        constructor(n, r, i) {
                            this.router = n, this.route = r, this.locationStrategy = i, this.commands = null, this.href = null, this.onChanges = new vn, this.subscription = n.events.subscribe(a => {
                                a instanceof Dr && this.updateTargetUrlAndHref()
                            })
                        }
                        set routerLink(n) {
                            this.commands = null != n ? Array.isArray(n) ? n : [n] : null
                        }
                        ngOnChanges(n) {
                            this.updateTargetUrlAndHref(), this.onChanges.next(this)
                        }
                        ngOnDestroy() {
                            this.subscription.unsubscribe()
                        }
                        onClick(n, r, i, a, l) {
                            if (0 !== n || r || i || a || l || "string" == typeof this.target && "_self" != this.target || null === this.urlTree) return !0;
                            const u = {
                                skipLocationChange: Ri(this.skipLocationChange),
                                replaceUrl: Ri(this.replaceUrl),
                                state: this.state
                            };
                            return this.router.navigateByUrl(this.urlTree, u), !1
                        }
                        updateTargetUrlAndHref() {
                            this.href = null !== this.urlTree ? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null
                        }
                        get urlTree() {
                            return null === this.commands ? null : this.router.createUrlTree(this.commands, {
                                relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                                queryParams: this.queryParams,
                                fragment: this.fragment,
                                queryParamsHandling: this.queryParamsHandling,
                                preserveFragment: Ri(this.preserveFragment)
                            })
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(F(pt), F(Mi), F(Cr))
                    }, e.\u0275dir = Qe({
                        type: e,
                        selectors: [
                            ["a", "routerLink", ""],
                            ["area", "routerLink", ""]
                        ],
                        hostVars: 2,
                        hostBindings: function (n, r) {
                            1 & n && na("click", function (a) {
                                return r.onClick(a.button, a.ctrlKey, a.shiftKey, a.altKey, a.metaKey)
                            }), 2 & n && Ju("target", r.target)("href", r.href, su)
                        },
                        inputs: {
                            target: "target",
                            queryParams: "queryParams",
                            fragment: "fragment",
                            queryParamsHandling: "queryParamsHandling",
                            preserveFragment: "preserveFragment",
                            skipLocationChange: "skipLocationChange",
                            replaceUrl: "replaceUrl",
                            state: "state",
                            relativeTo: "relativeTo",
                            routerLink: "routerLink"
                        },
                        features: [or]
                    }), e
                })();

            function Ri(e) {
                return "" === e || !!e
            }
            let fl = (() => {
                class e {
                    constructor(n, r, i, a, l, u) {
                        this.router = n, this.element = r, this.renderer = i, this.cdr = a, this.link = l, this.linkWithHref = u, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
                            exact: !1
                        }, this.isActiveChange = new st, this.routerEventsSubscription = n.events.subscribe(c => {
                            c instanceof Dr && this.update()
                        })
                    }
                    ngAfterContentInit() {
                        q(this.links.changes, this.linksWithHrefs.changes, q(null)).pipe(Li()).subscribe(n => {
                            this.update(), this.subscribeToEachLinkOnChanges()
                        })
                    }
                    subscribeToEachLinkOnChanges() {
                        var r;
                        null == (r = this.linkInputChangesSubscription) || r.unsubscribe();
                        const n = [...this.links.toArray(), ...this.linksWithHrefs.toArray(), this.link, this.linkWithHref].filter(i => !!i).map(i => i.onChanges);
                        this.linkInputChangesSubscription = ut(n).pipe(Li()).subscribe(i => {
                            this.isActive !== this.isLinkActive(this.router)(i) && this.update()
                        })
                    }
                    set routerLinkActive(n) {
                        const r = Array.isArray(n) ? n : n.split(" ");
                        this.classes = r.filter(i => !!i)
                    }
                    ngOnChanges(n) {
                        this.update()
                    }
                    ngOnDestroy() {
                        var n;
                        this.routerEventsSubscription.unsubscribe(), null == (n = this.linkInputChangesSubscription) || n.unsubscribe()
                    }
                    update() {
                        !this.links || !this.linksWithHrefs || !this.router.navigated || Promise.resolve().then(() => {
                            const n = this.hasActiveLinks();
                            this.isActive !== n && (this.isActive = n, this.cdr.markForCheck(), this.classes.forEach(r => {
                                n ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r)
                            }), this.isActiveChange.emit(n))
                        })
                    }
                    isLinkActive(n) {
                        const r = function (e) {
                            return !!e.paths
                        }(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1;
                        return i => !!i.urlTree && n.isActive(i.urlTree, r)
                    }
                    hasActiveLinks() {
                        const n = this.isLinkActive(this.router);
                        return this.link && n(this.link) || this.linkWithHref && n(this.linkWithHref) || this.links.some(n) || this.linksWithHrefs.some(n)
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(F(pt), F(It), F(da), F(Gc), F(pf, 8), F(le, 8))
                }, e.\u0275dir = Qe({
                    type: e,
                    selectors: [
                        ["", "routerLinkActive", ""]
                    ],
                    contentQueries: function (n, r, i) {
                        if (1 & n && (Tc(i, pf, 5), Tc(i, le, 5)), 2 & n) {
                            let a;
                            Sc(a = kc()) && (r.links = a), Sc(a = kc()) && (r.linksWithHrefs = a)
                        }
                    },
                    inputs: {
                        routerLinkActiveOptions: "routerLinkActiveOptions",
                        routerLinkActive: "routerLinkActive"
                    },
                    outputs: {
                        isActiveChange: "isActiveChange"
                    },
                    exportAs: ["routerLinkActive"],
                    features: [or]
                }), e
            })();
            class qb {}
            class Wb {
                preload(t, n) {
                    return q(null)
                }
            }
            let zb = (() => {
                    class e {
                        constructor(n, r, i, a) {
                            this.router = n, this.injector = i, this.preloadingStrategy = a, this.loader = new Ub(i, r, c => n.triggerEvent(new Xy(c)), c => n.triggerEvent(new eb(c)))
                        }
                        setUpPreloading() {
                            this.subscription = this.router.events.pipe(_r(n => n instanceof Dr), Wo(() => this.preload())).subscribe(() => {})
                        }
                        preload() {
                            const n = this.injector.get(pn);
                            return this.processRoutes(n, this.router.config)
                        }
                        ngOnDestroy() {
                            this.subscription && this.subscription.unsubscribe()
                        }
                        processRoutes(n, r) {
                            const i = [];
                            for (const a of r)
                                if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                                    const l = a._loadedConfig;
                                    i.push(this.processRoutes(l.module, l.routes))
                                } else a.loadChildren && !a.canLoad ? i.push(this.preloadConfig(n, a)) : a.children && i.push(this.processRoutes(n, a.children));
                            return ut(i).pipe(Li(), fe(a => {}))
                        }
                        preloadConfig(n, r) {
                            return this.preloadingStrategy.preload(r, () => (r._loadedConfig ? q(r._loadedConfig) : this.loader.load(n.injector, r)).pipe($e(a => (r._loadedConfig = a, this.processRoutes(a.module, a.routes)))))
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(R(pt), R(ba), R(ae), R(qb))
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                gf = (() => {
                    class e {
                        constructor(n, r, i = {}) {
                            this.router = n, this.viewportScroller = r, this.options = i, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, i.scrollPositionRestoration = i.scrollPositionRestoration || "disabled", i.anchorScrolling = i.anchorScrolling || "disabled"
                        }
                        init() {
                            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                        }
                        createScrollEvents() {
                            return this.router.events.subscribe(n => {
                                n instanceof Ka ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = n.navigationTrigger, this.restoredId = n.restoredState ? n.restoredState.navigationId : 0) : n instanceof Dr && (this.lastId = n.id, this.scheduleScrollEvent(n, this.router.parseUrl(n.urlAfterRedirects).fragment))
                            })
                        }
                        consumeScrollEvents() {
                            return this.router.events.subscribe(n => {
                                n instanceof tb && (n.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(n.position) : n.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(n.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                            })
                        }
                        scheduleScrollEvent(n, r) {
                            this.router.triggerEvent(new tb(n, "popstate" === this.lastSource ? this.store[this.restoredId] : null, r))
                        }
                        ngOnDestroy() {
                            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                        }
                    }
                    return e.\u0275fac = function (n) {
                        rc()
                    }, e.\u0275prov = Y({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            const xr = new te("ROUTER_CONFIGURATION"),
                Gb = new te("ROUTER_FORROOT_GUARD"),
                kM = [Oa, {
                    provide: db,
                    useClass: fb
                }, {
                    provide: pt,
                    useFactory: function (e, t, n, r, i, a, l = {}, u, c) {
                        const h = new pt(null, e, t, n, r, i, ib(a));
                        return u && (h.urlHandlingStrategy = u), c && (h.routeReuseStrategy = c),
                            function (e, t) {
                                e.errorHandler && (t.errorHandler = e.errorHandler), e.malformedUriErrorHandler && (t.malformedUriErrorHandler = e.malformedUriErrorHandler), e.onSameUrlNavigation && (t.onSameUrlNavigation = e.onSameUrlNavigation), e.paramsInheritanceStrategy && (t.paramsInheritanceStrategy = e.paramsInheritanceStrategy), e.relativeLinkResolution && (t.relativeLinkResolution = e.relativeLinkResolution), e.urlUpdateStrategy && (t.urlUpdateStrategy = e.urlUpdateStrategy), e.canceledNavigationResolution && (t.canceledNavigationResolution = e.canceledNavigationResolution)
                            }(l, h), l.enableTracing && h.events.subscribe(p => {
                                var g, m;
                                null == (g = console.group) || g.call(console, `Router Event: ${p.constructor.name}`), console.log(p.toString()), console.log(p), null == (m = console.groupEnd) || m.call(console)
                            }), h
                    },
                    deps: [db, Jo, Oa, ae, ba, hf, xr, [class {}, new ft],
                        [class {}, new ft]
                    ]
                }, Jo, {
                    provide: Mi,
                    useFactory: function (e) {
                        return e.routerState.root
                    },
                    deps: [pt]
                }, zb, Wb, class {
                    preload(t, n) {
                        return n().pipe(wr(() => q(null)))
                    }
                }, {
                    provide: xr,
                    useValue: {
                        enableTracing: !1
                    }
                }];

            function MM() {
                return new qc("Router", pt)
            }
            let Qb = (() => {
                class e {
                    constructor(n, r) {}
                    static forRoot(n, r) {
                        return {
                            ngModule: e,
                            providers: [kM, Yb(n), {
                                    provide: Gb,
                                    useFactory: OM,
                                    deps: [
                                        [pt, new ft, new Hn]
                                    ]
                                }, {
                                    provide: xr,
                                    useValue: r || {}
                                }, {
                                    provide: Cr,
                                    useFactory: FM,
                                    deps: [br, [new Wr(_d), new ft], xr]
                                }, {
                                    provide: gf,
                                    useFactory: RM,
                                    deps: [pt, cS, xr]
                                }, {
                                    provide: qb,
                                    useExisting: r && r.preloadingStrategy ? r.preloadingStrategy : Wb
                                }, {
                                    provide: qc,
                                    multi: !0,
                                    useFactory: MM
                                },
                                [mf, {
                                    provide: Ao,
                                    multi: !0,
                                    useFactory: VM,
                                    deps: [mf]
                                }, {
                                    provide: Kb,
                                    useFactory: jM,
                                    deps: [mf]
                                }, {
                                    provide: av,
                                    multi: !0,
                                    useExisting: Kb
                                }]
                            ]
                        }
                    }
                    static forChild(n) {
                        return {
                            ngModule: e,
                            providers: [Yb(n)]
                        }
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(Gb, 8), R(pt, 8))
                }, e.\u0275mod = Xn({
                    type: e
                }), e.\u0275inj = bn({}), e
            })();

            function RM(e, t, n) {
                return n.scrollOffset && t.setOffset(n.scrollOffset), new gf(e, t, n)
            }

            function FM(e, t, n = {}) {
                return n.useHash ? new H6(e, t) : new wd(e, t)
            }

            function OM(e) {
                return "guarded"
            }

            function Yb(e) {
                return [{
                    provide: jC,
                    multi: !0,
                    useValue: e
                }, {
                    provide: hf,
                    multi: !0,
                    useValue: e
                }]
            }
            let mf = (() => {
                class e {
                    constructor(n) {
                        this.injector = n, this.initNavigation = !1, this.destroyed = !1, this.resultOfPreactivationDone = new vn
                    }
                    appInitializer() {
                        return this.injector.get(V6, Promise.resolve(null)).then(() => {
                            if (this.destroyed) return Promise.resolve(!0);
                            let r = null;
                            const i = new Promise(u => r = u),
                                a = this.injector.get(pt),
                                l = this.injector.get(xr);
                            return "disabled" === l.initialNavigation ? (a.setUpLocationChangeListener(), r(!0)) : "enabled" === l.initialNavigation || "enabledBlocking" === l.initialNavigation ? (a.hooks.afterPreactivation = () => this.initNavigation ? q(null) : (this.initNavigation = !0, r(!0), this.resultOfPreactivationDone), a.initialNavigation()) : r(!0), i
                        })
                    }
                    bootstrapListener(n) {
                        const r = this.injector.get(xr),
                            i = this.injector.get(zb),
                            a = this.injector.get(gf),
                            l = this.injector.get(pt),
                            u = this.injector.get(Ci);
                        n === u.components[0] && (("enabledNonBlocking" === r.initialNavigation || void 0 === r.initialNavigation) && l.initialNavigation(), i.setUpPreloading(), a.init(), l.resetRootComponentType(u.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                    }
                    ngOnDestroy() {
                        this.destroyed = !0
                    }
                }
                return e.\u0275fac = function (n) {
                    return new(n || e)(R(ae))
                }, e.\u0275prov = Y({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function VM(e) {
                return e.appInitializer.bind(e)
            }

            function jM(e) {
                return e.bootstrapListener.bind(e)
            }
            const Kb = new te("Router Initializer"),
                Ae = function () {
                    return {
                        exact: !0
                    }
                };
            let Zb = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-navbar-style-one"]
                        ],
                        decls: 102,
                        vars: 42,
                        consts: [
                            [1, "navbar-area", "fixed-top"],
                            [1, "mobile-nav"],
                            ["routerLink", "/", 1, "logo"],
                            ["src", "assets/img/logo-two.png", "alt", "Logo"],
                            [1, "main-nav"],
                            [1, "container"],
                            [1, "navbar", "navbar-expand-md", "navbar-light"],
                            ["routerLink", "/", 1, "navbar-brand"],
                            ["src", "assets/img/logo.png", "alt", "Logo"],
                            ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"],
                            [1, "navbar-nav"],
                            [1, "nav-item"],
                            ["href", "javascript:void(0)", 1, "nav-link", "dropdown-toggle"],
                            [1, "bx", "bx-chevron-down"],
                            [1, "dropdown-menu"],
                            ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/home-two", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/home-three", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/categories", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/food-collection", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/online-order", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/chefs", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/book-table", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/checkout", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            [1, "side-nav"],
                            ["routerLink", "/", 1, "nav-cart"],
                            [1, "bx", "bxs-cart"],
                            ["href", "tel:+1123456789", 1, "nav-tel"],
                            [1, "bx", "bxs-phone-call"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "div", 0), o(1, "div", 1), o(2, "a", 2), f(3, "img", 3), s(), s(), o(4, "div", 4), o(5, "div", 5), o(6, "nav", 6), o(7, "a", 7), f(8, "img", 8), s(), o(9, "div", 9), o(10, "ul", 10), o(11, "li", 11), o(12, "a", 12), d(13, "Home "), f(14, "i", 13), s(), o(15, "ul", 14), o(16, "li", 11), o(17, "a", 15), d(18, "Home Page One"), s(), s(), o(19, "li", 11), o(20, "a", 16), d(21, "Home Page Two"), s(), s(), o(22, "li", 11), o(23, "a", 17), d(24, "Home Page Three"), s(), s(), s(), s(), o(25, "li", 11), o(26, "a", 18), d(27, "About"), s(), s(), o(28, "li", 11), o(29, "a", 19), d(30, "Categories"), s(), s(), o(31, "li", 11), o(32, "a", 12), d(33, "Services "), f(34, "i", 13), s(), o(35, "ul", 14), o(36, "li", 11), o(37, "a", 20), d(38, "Services"), s(), s(), o(39, "li", 11), o(40, "a", 21), d(41, "Services Details"), s(), s(), s(), s(), o(42, "li", 11), o(43, "a", 12), d(44, "Blog "), f(45, "i", 13), s(), o(46, "ul", 14), o(47, "li", 11), o(48, "a", 22), d(49, "Blog"), s(), s(), o(50, "li", 11), o(51, "a", 23), d(52, "Blog Details"), s(), s(), s(), s(), o(53, "li", 11), o(54, "a", 12), d(55, "Pages "), f(56, "i", 13), s(), o(57, "ul", 14), o(58, "li", 11), o(59, "a", 24), d(60, "Food Collection"), s(), s(), o(61, "li", 11), o(62, "a", 25), d(63, "Online Order"), s(), s(), o(64, "li", 11), o(65, "a", 26), d(66, "Chefs"), s(), s(), o(67, "li", 11), o(68, "a", 27), d(69, "Book A Table"), s(), s(), o(70, "li", 11), o(71, "a", 28), d(72, "Cart"), s(), s(), o(73, "li", 11), o(74, "a", 29), d(75, "Checkout"), s(), s(), o(76, "li", 11), o(77, "a", 30), d(78, "Coming Soon"), s(), s(), o(79, "li", 11), o(80, "a", 31), d(81, "FAQ"), s(), s(), o(82, "li", 11), o(83, "a", 32), d(84, "Terms & Conditions"), s(), s(), o(85, "li", 11), o(86, "a", 33), d(87, "Privacy Policy"), s(), s(), o(88, "li", 11), o(89, "a", 34), d(90, "404 Error"), s(), s(), s(), s(), o(91, "li", 11), o(92, "a", 35), d(93, "Contact"), s(), s(), s(), o(94, "div", 36), o(95, "a", 37), f(96, "i", 38), o(97, "span"), d(98, "1"), s(), s(), o(99, "a", 39), f(100, "i", 40), d(101, " +1 123 456 789"), s(), s(), s(), s(), s(), s(), s()), 2 & n && (S(17), x("routerLinkActiveOptions", T(21, Ae)), S(3), x("routerLinkActiveOptions", T(22, Ae)), S(3), x("routerLinkActiveOptions", T(23, Ae)), S(3), x("routerLinkActiveOptions", T(24, Ae)), S(3), x("routerLinkActiveOptions", T(25, Ae)), S(8), x("routerLinkActiveOptions", T(26, Ae)), S(3), x("routerLinkActiveOptions", T(27, Ae)), S(8), x("routerLinkActiveOptions", T(28, Ae)), S(3), x("routerLinkActiveOptions", T(29, Ae)), S(8), x("routerLinkActiveOptions", T(30, Ae)), S(3), x("routerLinkActiveOptions", T(31, Ae)), S(3), x("routerLinkActiveOptions", T(32, Ae)), S(3), x("routerLinkActiveOptions", T(33, Ae)), S(3), x("routerLinkActiveOptions", T(34, Ae)), S(3), x("routerLinkActiveOptions", T(35, Ae)), S(3), x("routerLinkActiveOptions", T(36, Ae)), S(3), x("routerLinkActiveOptions", T(37, Ae)), S(3), x("routerLinkActiveOptions", T(38, Ae)), S(3), x("routerLinkActiveOptions", T(39, Ae)), S(3), x("routerLinkActiveOptions", T(40, Ae)), S(3), x("routerLinkActiveOptions", T(41, Ae)))
                        },
                        directives: [le, fl],
                        styles: [""]
                    }), e
                })(),
                vf = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-footer-style-one"]
                        ],
                        decls: 108,
                        vars: 0,
                        consts: [
                            [1, "pt-100", "pb-70"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "footer-item"],
                            [1, "footer-logo"],
                            ["routerLink", "/"],
                            ["src", "assets/img/logo.png", "alt", "Logo"],
                            [1, "social-link"],
                            ["href", "#", "target", "_blank"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            [1, "bx", "bxl-youtube"],
                            [1, "footer-services"],
                            ["routerLink", "/contact"],
                            [1, "bx", "bx-chevron-right"],
                            ["routerLink", "/about"],
                            ["routerLink", "/chefs"],
                            ["routerLink", "/blog"],
                            ["routerLink", "/privacy-policy"],
                            ["routerLink", "/services"],
                            ["routerLink", "/food-collection"],
                            ["routerLink", "/online-order"],
                            ["href", "tel:+1123456789"],
                            [1, "bx", "bx-phone-call"],
                            ["href", "tel:+5143456768"],
                            ["href", "mailto:info@spiz.com"],
                            [1, "bx", "bx-message-detail"],
                            ["href", "mailto:hello@spiz.com"],
                            [1, "bx", "bx-location-plus"],
                            [1, "copyright-area"],
                            [1, "copyright-item"],
                            ["href", "https://hibootstrap.com/", "target", "_blank"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "footer", 0), o(1, "div", 1), o(2, "div", 2), o(3, "div", 3), o(4, "div", 4), o(5, "div", 5), o(6, "a", 6), f(7, "img", 7), s(), o(8, "p"), d(9, "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), o(10, "div", 8), o(11, "ul"), o(12, "li"), o(13, "a", 9), f(14, "i", 10), s(), s(), o(15, "li"), o(16, "a", 9), f(17, "i", 11), s(), s(), o(18, "li"), o(19, "a", 9), f(20, "i", 12), s(), s(), o(21, "li"), o(22, "a", 9), f(23, "i", 13), s(), s(), s(), s(), s(), s(), s(), o(24, "div", 3), o(25, "div", 4), o(26, "div", 14), o(27, "h3"), d(28, "Services"), s(), o(29, "ul"), o(30, "li"), o(31, "a", 15), f(32, "i", 16), d(33, " Support"), s(), s(), o(34, "li"), o(35, "a", 17), f(36, "i", 16), d(37, " About"), s(), s(), o(38, "li"), o(39, "a", 18), f(40, "i", 16), d(41, " Chefs"), s(), s(), o(42, "li"), o(43, "a", 19), f(44, "i", 16), d(45, " Blog"), s(), s(), o(46, "li"), o(47, "a", 20), f(48, "i", 16), d(49, " Privacy Policy"), s(), s(), s(), s(), s(), s(), o(50, "div", 3), o(51, "div", 4), o(52, "div", 14), o(53, "h3"), d(54, "Quick Links"), s(), o(55, "ul"), o(56, "li"), o(57, "a", 21), f(58, "i", 16), d(59, " Services"), s(), s(), o(60, "li"), o(61, "a", 22), f(62, "i", 16), d(63, " Food Collection"), s(), s(), o(64, "li"), o(65, "a", 23), f(66, "i", 16), d(67, " Online Order"), s(), s(), o(68, "li"), o(69, "a", 19), f(70, "i", 16), d(71, " Blog"), s(), s(), o(72, "li"), o(73, "a", 15), f(74, "i", 16), d(75, " Contact"), s(), s(), s(), s(), s(), s(), o(76, "div", 3), o(77, "div", 4), o(78, "div", 14), o(79, "h3"), d(80, "Contact Us"), s(), o(81, "ul"), o(82, "li"), o(83, "a", 24), f(84, "i", 25), d(85, " +1 1234 56 789"), s(), s(), o(86, "li"), o(87, "a", 26), f(88, "i", 25), d(89, " +5 1434 56 768"), s(), s(), o(90, "li"), o(91, "a", 27), f(92, "i", 28), d(93, " info@spiz.com"), s(), s(), o(94, "li"), o(95, "a", 29), f(96, "i", 28), d(97, " hello@spiz.com"), s(), s(), o(98, "li"), f(99, "i", 30), d(100, " Br1. 28/A Street, New York, USA"), s(), s(), s(), s(), s(), s(), s(), s(), o(101, "div", 31), o(102, "div", 1), o(103, "div", 32), o(104, "p"), d(105, "Copyright @2021 Spiz. All Rights Reserved By "), o(106, "a", 33), d(107, "HiBootstrap"), s(), s(), s(), s(), s())
                        },
                        directives: [le],
                        styles: [""]
                    }), e
                })(),
                HM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-home-one"]
                        ],
                        decls: 712,
                        vars: 0,
                        consts: [
                            [1, "banner-area"],
                            [1, "banner-shape"],
                            ["src", "assets/img/home-one/banner/shape1.png", "alt", "Shape"],
                            ["src", "assets/img/home-one/banner/shape2.png", "alt", "Shape"],
                            ["src", "assets/img/home-one/banner/shape3.png", "alt", "Shape"],
                            ["src", "assets/img/home-one/banner/banner-shape.png", "alt", "Shape"],
                            [1, "d-table"],
                            [1, "d-table-cell"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-6"],
                            [1, "banner-content"],
                            ["type", "text", "placeholder", "Enter food name", 1, "form-control"],
                            ["type", "submit", 1, "btn", "banner-form-btn"],
                            [1, "banner-slider", "owl-theme", "owl-carousel"],
                            [1, "slider-item"],
                            ["src", "assets/img/home-one/banner/banner-slider1.png", "alt", "Slider"],
                            ["src", "assets/img/home-one/banner/banner-slider2.png", "alt", "Slider"],
                            ["src", "assets/img/home-one/banner/banner-slider3.png", "alt", "Slider"],
                            [1, "feature-area", "pb-70"],
                            [1, "section-title"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "feature-item"],
                            ["src", "assets/img/home-one/feature1.jpg", "alt", "Feature"],
                            [1, "feature-inner"],
                            ["src", "assets/img/home-one/feature1.png", "alt", "Feature"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-right-arrow-alt"],
                            ["src", "assets/img/home-one/feature2.jpg", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature2.png", "alt", "Feature"],
                            [1, "col-sm-6", "offset-sm-3", "offset-lg-0", "col-lg-4"],
                            ["src", "assets/img/home-one/feature3.jpg", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature3.png", "alt", "Feature"],
                            [1, "services-area", "ptb-100"],
                            [1, "services-slider", "owl-theme", "owl-carousel"],
                            [1, "services-item"],
                            ["routerLink", "/services-details"],
                            ["src", "assets/img/home-one/services1.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "services-image", 1, "service-shape"],
                            ["src", "assets/img/home-one/services2.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services3.png", "alt", "services-image"],
                            [1, "restant-area"],
                            [1, "restant-shape"],
                            ["src", "assets/img/home-one/services-shape2.png", "alt", "Shape"],
                            [1, "container-fluid"],
                            [1, "restant-img"],
                            ["src", "assets/img/home-one/restant.png", "alt", "Restant"],
                            ["src", "assets/img/home-one/restant2.png", "alt", "Restant"],
                            ["src", "assets/img/home-one/restant3.png", "alt", "Restant"],
                            ["src", "assets/img/home-one/restant4.png", "alt", "Restant"],
                            ["src", "assets/img/home-one/restant5.png", "alt", "Restant"],
                            [1, "restant-content"],
                            ["routerLink", "/services-details", 1, "cmn-btn"],
                            [1, "collection-area", "pb-100"],
                            [1, "sorting-menu"],
                            ["data-filter", "all", 1, "filter", "active"],
                            ["data-filter", ".web", 1, "filter"],
                            ["data-filter", ".ui", 1, "filter"],
                            ["data-filter", ".ux", 1, "filter"],
                            ["data-filter", ".branding", 1, "filter"],
                            ["id", "Container", 1, "row"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "ui"],
                            [1, "collection-item"],
                            [1, "collection-top"],
                            ["src", "assets/img/home-one/collection/1.jpg", "alt", "Collection"],
                            [1, "bx", "bxs-star", "checked"],
                            [1, "add-cart"],
                            ["routerLink", "/cart"],
                            [1, "bx", "bxs-cart"],
                            [1, "collection-bottom"],
                            [1, "number"],
                            [1, "minus"],
                            ["type", "text", "value", "1", 1, "form-control"],
                            [1, "plus"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui"],
                            ["src", "assets/img/home-one/collection/2.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "ui"],
                            ["src", "assets/img/home-one/collection/3.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "web"],
                            ["src", "assets/img/home-one/collection/4.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "branding"],
                            ["src", "assets/img/home-one/collection/5.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui", "web"],
                            ["src", "assets/img/home-one/collection/6.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "branding"],
                            ["src", "assets/img/home-one/collection/7.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "ui"],
                            ["src", "assets/img/home-one/collection/8.jpg", "alt", "Collection"],
                            [1, "more-collection"],
                            ["routerLink", "/food-collection"],
                            [1, "menu-area", "pt-100", "pb-70"],
                            [1, "menu-item"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "Menu", 1, "menu-shape"],
                            ["src", "assets/img/home-one/menu1.png", "alt", "Menu"],
                            [1, "menu-item", "active"],
                            ["src", "assets/img/home-one/menu2.png", "alt", "Menu"],
                            ["src", "assets/img/home-one/menu3.png", "alt", "Menu"],
                            [1, "reservation-area"],
                            [1, "reservation-shape"],
                            ["src", "assets/img/home-one/reservation-shape.png", "alt", "Shape"],
                            [1, "reservation-item"],
                            ["type", "date", "name", "arrive", 1, "form-control"],
                            ["type", "time", "name", "arrive", 1, "form-control"],
                            ["type", "submit", 1, "btn", "cmn-btn"],
                            [1, "reservation-img"],
                            ["src", "assets/img/home-one/reservation.png", "alt", "Reservation"],
                            [1, "chef-area", "pb-70"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "chef-item"],
                            [1, "chef-top"],
                            ["src", "assets/img/home-one/chef/1.jpg", "alt", "Chef"],
                            [1, "chef-inner"],
                            [1, "chef-bottom"],
                            ["target", "_blank", "href", "#"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            ["src", "assets/img/home-one/chef/6.jpg", "alt", "Chef"],
                            [1, "chef-item", "active"],
                            ["src", "assets/img/home-one/chef/3.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/7.jpg", "alt", "Chef"],
                            [1, "review-area"],
                            [1, "container-fluid", "p-0"],
                            [1, "row", "m-0", "align-items-center"],
                            [1, "col-lg-6", "p-0"],
                            [1, "review-img"],
                            ["src", "assets/img/home-one/review1.png", "alt", "Review"],
                            ["src", "assets/img/home-one/review2.png", "alt", "Review"],
                            [1, "review-item"],
                            [1, "slider-nav"],
                            [1, "item"],
                            ["src", "assets/img/home-one/review3.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review4.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review5.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review6.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review7.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review8.png", "alt", "image", "draggable", "false"],
                            [1, "slider-for"],
                            [1, "blog-area", "ptb-100"],
                            [1, "blog-item"],
                            [1, "blog-top"],
                            ["routerLink", "/blog-detailhtml"],
                            ["src", "assets/img/home-one/blog1.jpg", "alt", "Blog"],
                            [1, "blog-bottom"],
                            ["routerLink", "/blog-detailhtml", 1, "cmn-btn"],
                            ["src", "assets/img/home-one/blog2.jpg", "alt", "Blog"],
                            ["src", "assets/img/home-one/blog3.jpg", "alt", "Blog"],
                            [1, "text-center"],
                            ["routerLink", "/blog", 1, "read-blog-btn"],
                            [1, "subscribe-area"],
                            [1, "subscribe-shape"],
                            [1, "col-lg-7"],
                            [1, "subscribe-item"],
                            ["data-toggle", "validator", 1, "newsletter-form"],
                            ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"],
                            [1, "social-link"],
                            ["href", "#", "target", "_blank"],
                            [1, "bx", "bxl-youtube"],
                            [1, "col-lg-5"],
                            [1, "subscribe-img"],
                            ["src", "assets/img/home-one/subscribe-main.png", "alt", "Subscribe"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-one"), o(1, "div", 0), o(2, "div", 1), f(3, "img", 2), f(4, "img", 3), f(5, "img", 4), f(6, "img", 5), s(), o(7, "div", 6), o(8, "div", 7), o(9, "div", 8), o(10, "div", 9), o(11, "div", 10), o(12, "div", 11), o(13, "h1"), d(14, "Get Spiz Food by Ordering Online"), s(), o(15, "p"), d(16, "A restaurant sometimes known as a diner is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal."), s(), o(17, "form"), f(18, "input", 12), o(19, "button", 13), d(20, "Search Now"), s(), s(), s(), s(), o(21, "div", 10), o(22, "div", 14), o(23, "div", 15), f(24, "img", 16), s(), o(25, "div", 15), f(26, "img", 17), s(), o(27, "div", 15), f(28, "img", 18), s(), s(), s(), s(), s(), s(), s(), s(), o(29, "section", 19), o(30, "div", 8), o(31, "div", 20), o(32, "h2"), d(33, "Featured Categories"), s(), o(34, "p"), d(35, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(36, "div", 21), o(37, "div", 22), o(38, "div", 23), f(39, "img", 24), o(40, "div", 25), o(41, "ul"), o(42, "li"), f(43, "img", 26), s(), o(44, "li"), o(45, "span"), d(46, "Fast Food"), s(), s(), o(47, "li"), o(48, "a", 27), f(49, "i", 28), s(), s(), s(), s(), s(), s(), o(50, "div", 22), o(51, "div", 23), f(52, "img", 29), o(53, "div", 25), o(54, "ul"), o(55, "li"), f(56, "img", 30), s(), o(57, "li"), o(58, "span"), d(59, "Hot Platter"), s(), s(), o(60, "li"), o(61, "a", 27), f(62, "i", 28), s(), s(), s(), s(), s(), s(), o(63, "div", 31), o(64, "div", 23), f(65, "img", 32), o(66, "div", 25), o(67, "ul"), o(68, "li"), f(69, "img", 33), s(), o(70, "li"), o(71, "span"), d(72, "Dessert"), s(), s(), o(73, "li"), o(74, "a", 27), f(75, "i", 28), s(), s(), s(), s(), s(), s(), s(), s(), s(), o(76, "section", 34), o(77, "div", 8), o(78, "div", 20), o(79, "h2"), d(80, "What Spiz Services"), s(), o(81, "p"), d(82, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(83, "div", 35), o(84, "div", 36), o(85, "a", 37), f(86, "img", 38), f(87, "img", 39), o(88, "h3"), d(89, "Fresh Healthy Food"), s(), o(90, "p"), d(91, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(92, "div", 36), o(93, "a", 37), f(94, "img", 40), f(95, "img", 39), o(96, "h3"), d(97, "Free Fast Home Delivery"), s(), o(98, "p"), d(99, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(100, "div", 36), o(101, "a", 37), f(102, "img", 41), f(103, "img", 39), o(104, "h3"), d(105, "Discount Voucher"), s(), o(106, "p"), d(107, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(108, "div", 36), o(109, "a", 37), f(110, "img", 41), f(111, "img", 39), o(112, "h3"), d(113, "Discount Voucher"), s(), o(114, "p"), d(115, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), s(), s(), o(116, "div", 42), o(117, "div", 43), f(118, "img", 44), s(), o(119, "div", 45), o(120, "div", 9), o(121, "div", 10), o(122, "div", 46), f(123, "img", 47), f(124, "img", 48), f(125, "img", 49), f(126, "img", 50), f(127, "img", 51), s(), s(), o(128, "div", 10), o(129, "div", 52), o(130, "div", 20), o(131, "h2"), d(132, "Spiz is One Of The Most Hygienic & Trusted Food Service"), s(), o(133, "p"), d(134, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), s(), o(135, "p"), d(136, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby."), s(), s(), o(137, "a", 53), d(138, "Know More"), s(), s(), s(), s(), s(), s(), o(139, "section", 54), o(140, "div", 8), o(141, "div", 20), o(142, "h2"), d(143, "Our Regular Food Collections"), s(), o(144, "p"), d(145, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(146, "div", 55), o(147, "ul"), o(148, "li", 56), d(149, "All"), s(), o(150, "li", 57), d(151, "Fast Food"), s(), o(152, "li", 58), d(153, "Platters"), s(), o(154, "li", 59), d(155, "Dessert"), s(), o(156, "li", 60), d(157, "Asian Food"), s(), s(), s(), o(158, "div", 61), o(159, "div", 62), o(160, "div", 63), o(161, "div", 64), f(162, "img", 65), o(163, "ul"), o(164, "li"), f(165, "i", 66), s(), o(166, "li"), f(167, "i", 66), s(), o(168, "li"), f(169, "i", 66), s(), o(170, "li"), f(171, "i", 66), s(), o(172, "li"), f(173, "i", 66), s(), s(), o(174, "div", 67), o(175, "a", 68), f(176, "i", 69), d(177, " Add to Cart"), s(), s(), s(), o(178, "div", 70), o(179, "h3"), d(180, "Dark Chocolate Cake"), s(), o(181, "ul"), o(182, "li"), o(183, "span"), d(184, "$25"), s(), s(), o(185, "li"), o(186, "div", 71), o(187, "span", 72), d(188, "-"), s(), f(189, "input", 73), o(190, "span", 74), d(191, "+"), s(), s(), s(), s(), s(), s(), s(), o(192, "div", 75), o(193, "div", 63), o(194, "div", 64), f(195, "img", 76), o(196, "ul"), o(197, "li"), f(198, "i", 66), s(), o(199, "li"), f(200, "i", 66), s(), o(201, "li"), f(202, "i", 66), s(), o(203, "li"), f(204, "i", 66), s(), o(205, "li"), f(206, "i", 66), s(), s(), o(207, "div", 67), o(208, "a", 68), f(209, "i", 69), d(210, " Add to Cart"), s(), s(), s(), o(211, "div", 70), o(212, "h3"), d(213, "Cake with Drinks"), s(), o(214, "ul"), o(215, "li"), o(216, "span"), d(217, "$15"), s(), s(), o(218, "li"), o(219, "div", 71), o(220, "span", 72), d(221, "-"), s(), f(222, "input", 73), o(223, "span", 74), d(224, "+"), s(), s(), s(), s(), s(), s(), s(), o(225, "div", 77), o(226, "div", 63), o(227, "div", 64), f(228, "img", 78), o(229, "ul"), o(230, "li"), f(231, "i", 66), s(), o(232, "li"), f(233, "i", 66), s(), o(234, "li"), f(235, "i", 66), s(), o(236, "li"), f(237, "i", 66), s(), o(238, "li"), f(239, "i", 66), s(), s(), o(240, "div", 67), o(241, "a", 68), f(242, "i", 69), d(243, " Add to Cart"), s(), s(), s(), o(244, "div", 70), o(245, "h3"), d(246, "Doughnut Chocolate"), s(), o(247, "ul"), o(248, "li"), o(249, "span"), d(250, "$20"), s(), s(), o(251, "li"), o(252, "div", 71), o(253, "span", 72), d(254, "-"), s(), f(255, "input", 73), o(256, "span", 74), d(257, "+"), s(), s(), s(), s(), s(), s(), s(), o(258, "div", 79), o(259, "div", 63), o(260, "div", 64), f(261, "img", 80), o(262, "ul"), o(263, "li"), f(264, "i", 66), s(), o(265, "li"), f(266, "i", 66), s(), o(267, "li"), f(268, "i", 66), s(), o(269, "li"), f(270, "i", 66), s(), o(271, "li"), f(272, "i", 66), s(), s(), o(273, "div", 67), o(274, "a", 68), f(275, "i", 69), d(276, " Add to Cart"), s(), s(), s(), o(277, "div", 70), o(278, "h3"), d(279, "Dark Chocolate Cake"), s(), o(280, "ul"), o(281, "li"), o(282, "span"), d(283, "$23"), s(), s(), o(284, "li"), o(285, "div", 71), o(286, "span", 72), d(287, "-"), s(), f(288, "input", 73), o(289, "span", 74), d(290, "+"), s(), s(), s(), s(), s(), s(), s(), o(291, "div", 81), o(292, "div", 63), o(293, "div", 64), f(294, "img", 82), o(295, "ul"), o(296, "li"), f(297, "i", 66), s(), o(298, "li"), f(299, "i", 66), s(), o(300, "li"), f(301, "i", 66), s(), o(302, "li"), f(303, "i", 66), s(), o(304, "li"), f(305, "i", 66), s(), s(), o(306, "div", 67), o(307, "a", 68), f(308, "i", 69), d(309, " Add to Cart"), s(), s(), s(), o(310, "div", 70), o(311, "h3"), d(312, "Sweet Dougnuts"), s(), o(313, "ul"), o(314, "li"), o(315, "span"), d(316, "$35"), s(), s(), o(317, "li"), o(318, "div", 71), o(319, "span", 72), d(320, "-"), s(), f(321, "input", 73), o(322, "span", 74), d(323, "+"), s(), s(), s(), s(), s(), s(), s(), o(324, "div", 83), o(325, "div", 63), o(326, "div", 64), f(327, "img", 84), o(328, "ul"), o(329, "li"), f(330, "i", 66), s(), o(331, "li"), f(332, "i", 66), s(), o(333, "li"), f(334, "i", 66), s(), o(335, "li"), f(336, "i", 66), s(), o(337, "li"), f(338, "i", 66), s(), s(), o(339, "div", 67), o(340, "a", 68), f(341, "i", 69), d(342, " Add to Cart"), s(), s(), s(), o(343, "div", 70), o(344, "h3"), d(345, "Birthday Cake"), s(), o(346, "ul"), o(347, "li"), o(348, "span"), d(349, "$32"), s(), s(), o(350, "li"), o(351, "div", 71), o(352, "span", 72), d(353, "-"), s(), f(354, "input", 73), o(355, "span", 74), d(356, "+"), s(), s(), s(), s(), s(), s(), s(), o(357, "div", 85), o(358, "div", 63), o(359, "div", 64), f(360, "img", 86), o(361, "ul"), o(362, "li"), f(363, "i", 66), s(), o(364, "li"), f(365, "i", 66), s(), o(366, "li"), f(367, "i", 66), s(), o(368, "li"), f(369, "i", 66), s(), o(370, "li"), f(371, "i", 66), s(), s(), o(372, "div", 67), o(373, "a", 68), f(374, "i", 69), d(375, " Add to Cart"), s(), s(), s(), o(376, "div", 70), o(377, "h3"), d(378, "Chocolate Ice Cream"), s(), o(379, "ul"), o(380, "li"), o(381, "span"), d(382, "$28"), s(), s(), o(383, "li"), o(384, "div", 71), o(385, "span", 72), d(386, "-"), s(), f(387, "input", 73), o(388, "span", 74), d(389, "+"), s(), s(), s(), s(), s(), s(), s(), o(390, "div", 87), o(391, "div", 63), o(392, "div", 64), f(393, "img", 88), o(394, "ul"), o(395, "li"), f(396, "i", 66), s(), o(397, "li"), f(398, "i", 66), s(), o(399, "li"), f(400, "i", 66), s(), o(401, "li"), f(402, "i", 66), s(), o(403, "li"), f(404, "i", 66), s(), s(), o(405, "div", 67), o(406, "a", 68), f(407, "i", 69), d(408, " Add to Cart"), s(), s(), s(), o(409, "div", 70), o(410, "h3"), d(411, "Dark Chocolate Cake"), s(), o(412, "ul"), o(413, "li"), o(414, "span"), d(415, "$27"), s(), s(), o(416, "li"), o(417, "div", 71), o(418, "span", 72), d(419, "-"), s(), f(420, "input", 73), o(421, "span", 74), d(422, "+"), s(), s(), s(), s(), s(), s(), s(), s(), o(423, "div", 89), o(424, "a", 90), d(425, "View More Colletction"), s(), s(), s(), s(), o(426, "section", 91), o(427, "div", 8), o(428, "div", 20), o(429, "h2"), d(430, "Explore Our Food Menu"), s(), o(431, "p"), d(432, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(433, "div", 21), o(434, "div", 22), o(435, "div", 92), f(436, "img", 93), f(437, "img", 94), o(438, "h3"), d(439, "Breakfast Item"), s(), s(), s(), o(440, "div", 22), o(441, "div", 95), f(442, "img", 93), f(443, "img", 96), o(444, "h3"), d(445, "Lunch Item"), s(), s(), s(), o(446, "div", 31), o(447, "div", 92), f(448, "img", 93), f(449, "img", 97), o(450, "h3"), d(451, "Dinner Item"), s(), s(), s(), s(), s(), s(), o(452, "section", 98), o(453, "div", 99), f(454, "img", 100), s(), o(455, "div", 8), o(456, "div", 9), o(457, "div", 10), o(458, "div", 101), o(459, "div", 20), o(460, "h2"), d(461, "Reservation A Table"), s(), o(462, "p"), d(463, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse."), s(), s(), o(464, "form"), o(465, "ul"), o(466, "li"), f(467, "input", 102), s(), o(468, "li"), f(469, "input", 103), s(), o(470, "li"), o(471, "button", 104), d(472, "Reserve Now"), s(), s(), s(), s(), s(), s(), o(473, "div", 10), o(474, "div", 105), f(475, "img", 106), s(), s(), s(), s(), s(), o(476, "section", 107), o(477, "div", 8), o(478, "div", 20), o(479, "h2"), d(480, "Our Special Chefs"), s(), o(481, "p"), d(482, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(483, "div", 21), o(484, "div", 108), o(485, "div", 109), o(486, "div", 110), f(487, "img", 111), o(488, "div", 112), o(489, "h3"), d(490, "John Doe"), s(), o(491, "span"), d(492, "Head of Chef"), s(), s(), s(), o(493, "div", 113), o(494, "ul"), o(495, "li"), o(496, "a", 114), f(497, "i", 115), s(), s(), o(498, "li"), o(499, "a", 114), f(500, "i", 116), s(), s(), o(501, "li"), o(502, "a", 114), f(503, "i", 117), s(), s(), s(), s(), s(), s(), o(504, "div", 108), o(505, "div", 109), o(506, "div", 110), f(507, "img", 118), o(508, "div", 112), o(509, "h3"), d(510, "John Smith"), s(), o(511, "span"), d(512, "Assistant Chef"), s(), s(), s(), o(513, "div", 113), o(514, "ul"), o(515, "li"), o(516, "a", 114), f(517, "i", 115), s(), s(), o(518, "li"), o(519, "a", 114), f(520, "i", 116), s(), s(), o(521, "li"), o(522, "a", 114), f(523, "i", 117), s(), s(), s(), s(), s(), s(), o(524, "div", 108), o(525, "div", 119), o(526, "div", 110), f(527, "img", 120), o(528, "div", 112), o(529, "h3"), d(530, "Evanaa"), s(), o(531, "span"), d(532, "Intern Chef"), s(), s(), s(), o(533, "div", 113), o(534, "ul"), o(535, "li"), o(536, "a", 114), f(537, "i", 115), s(), s(), o(538, "li"), o(539, "a", 114), f(540, "i", 116), s(), s(), o(541, "li"), o(542, "a", 114), f(543, "i", 117), s(), s(), s(), s(), s(), s(), o(544, "div", 108), o(545, "div", 109), o(546, "div", 110), f(547, "img", 121), o(548, "div", 112), o(549, "h3"), d(550, "Knot Doe"), s(), o(551, "span"), d(552, "Asst. Chef"), s(), s(), s(), o(553, "div", 113), o(554, "ul"), o(555, "li"), o(556, "a", 114), f(557, "i", 115), s(), s(), o(558, "li"), o(559, "a", 114), f(560, "i", 116), s(), s(), o(561, "li"), o(562, "a", 114), f(563, "i", 117), s(), s(), s(), s(), s(), s(), s(), s(), s(), o(564, "div", 122), o(565, "div", 123), o(566, "div", 124), o(567, "div", 125), o(568, "div", 126), f(569, "img", 127), f(570, "img", 128), s(), s(), o(571, "div", 125), o(572, "div", 129), o(573, "div", 20), o(574, "h2"), d(575, "What People Say About Us"), s(), o(576, "p"), d(577, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(578, "div", 130), o(579, "div", 131), f(580, "img", 132), s(), o(581, "div", 131), f(582, "img", 133), s(), o(583, "div", 131), f(584, "img", 134), s(), o(585, "div", 131), f(586, "img", 135), s(), o(587, "div", 131), f(588, "img", 136), s(), o(589, "div", 131), f(590, "img", 137), s(), s(), o(591, "div", 138), o(592, "div", 131), o(593, "h3"), d(594, "John Doe"), s(), o(595, "p"), d(596, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(597, "div", 131), o(598, "h3"), d(599, "Jac Jackson"), s(), o(600, "p"), d(601, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(602, "div", 131), o(603, "h3"), d(604, "Tom Henry"), s(), o(605, "p"), d(606, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(607, "div", 131), o(608, "h3"), d(609, "John Mic"), s(), o(610, "p"), d(611, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(612, "div", 131), o(613, "h3"), d(614, "Stark Arey"), s(), o(615, "p"), d(616, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(617, "div", 131), o(618, "h3"), d(619, "Stark Arey"), s(), o(620, "p"), d(621, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), s(), s(), s(), s(), s(), s(), o(622, "section", 139), o(623, "div", 8), o(624, "div", 20), o(625, "h2"), d(626, "Our Regular Blogs"), s(), o(627, "p"), d(628, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(629, "div", 21), o(630, "div", 22), o(631, "div", 140), o(632, "div", 141), o(633, "a", 142), f(634, "img", 143), s(), o(635, "span"), d(636, "01 May 2020"), s(), s(), o(637, "div", 144), o(638, "h3"), o(639, "a", 142), d(640, "Brief About How to Make Pasta"), s(), s(), o(641, "p"), d(642, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(643, "a", 145), d(644, "Read More"), s(), s(), s(), s(), o(645, "div", 22), o(646, "div", 140), o(647, "div", 141), o(648, "a", 142), f(649, "img", 146), s(), o(650, "span"), d(651, "02 May 2020"), s(), s(), o(652, "div", 144), o(653, "h3"), o(654, "a", 142), d(655, "Brief About How to Make Pizza"), s(), s(), o(656, "p"), d(657, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(658, "a", 145), d(659, "Read More"), s(), s(), s(), s(), o(660, "div", 31), o(661, "div", 140), o(662, "div", 141), o(663, "a", 142), f(664, "img", 147), s(), o(665, "span"), d(666, "03 May 2020"), s(), s(), o(667, "div", 144), o(668, "h3"), o(669, "a", 142), d(670, "Brief About How to Make Burger"), s(), s(), o(671, "p"), d(672, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(673, "a", 145), d(674, "Read More"), s(), s(), s(), s(), s(), o(675, "div", 148), o(676, "a", 149), d(677, "Read More Blogs"), s(), s(), s(), s(), o(678, "section", 150), o(679, "div", 151), f(680, "img", 100), s(), o(681, "div", 8), o(682, "div", 9), o(683, "div", 152), o(684, "div", 153), o(685, "div", 20), o(686, "h2"), d(687, "Subscribe News Letter for Get Update"), s(), o(688, "p"), d(689, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(690, "form", 154), f(691, "input", 155), o(692, "button", 104), d(693, "Subscribe"), s(), s(), o(694, "div", 156), o(695, "ul"), o(696, "li"), o(697, "a", 157), f(698, "i", 115), s(), s(), o(699, "li"), o(700, "a", 157), f(701, "i", 116), s(), s(), o(702, "li"), o(703, "a", 157), f(704, "i", 117), s(), s(), o(705, "li"), o(706, "a", 157), f(707, "i", 158), s(), s(), s(), s(), s(), s(), o(708, "div", 159), o(709, "div", 160), f(710, "img", 161), s(), s(), s(), s(), s(), f(711, "app-footer-style-one"))
                        },
                        directives: [Zb, le, vf],
                        styles: [""]
                    }), e
                })();
            const xe = function () {
                return {
                    exact: !0
                }
            };
            let UM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-navbar-style-two"]
                        ],
                        decls: 153,
                        vars: 42,
                        consts: [
                            [1, "navbar-area", "fixed-top"],
                            [1, "mobile-nav"],
                            ["routerLink", "/", 1, "logo"],
                            ["src", "assets/img/logo-two.png", "alt", "Logo"],
                            [1, "main-nav", "main-nav-two"],
                            [1, "container"],
                            [1, "navbar", "navbar-expand-md", "navbar-light"],
                            ["routerLink", "/", 1, "navbar-brand"],
                            ["src", "assets/img/logo-two.png", "alt", "Logo", 1, "nav-two-logo-one"],
                            ["src", "assets/img/logo.png", "alt", "Logo", 1, "nav-two-logo-two"],
                            ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"],
                            [1, "navbar-nav"],
                            [1, "nav-item"],
                            ["href", "javascript:void(0)", 1, "nav-link", "dropdown-toggle"],
                            [1, "bx", "bx-chevron-down"],
                            [1, "dropdown-menu"],
                            ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/home-two", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/home-three", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/categories", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/food-collection", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/online-order", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/chefs", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/book-table", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/checkout", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            [1, "side-nav"],
                            ["routerLink", "/cart", 1, "nav-cart"],
                            [1, "bx", "bxs-cart"],
                            ["type", "button", "data-toggle", "modal", "data-target", "#myModalRight", 1, "btn", "modal-btn"],
                            [1, "bx", "bx-menu-alt-right"],
                            ["id", "myModalRight", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", "modal-right"],
                            ["role", "document", 1, "modal-dialog"],
                            [1, "modal-content"],
                            [1, "modal-header"],
                            ["src", "assets/img/logo.png", "alt", "Logo"],
                            ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"],
                            ["aria-hidden", "true"],
                            [1, "modal-body"],
                            [1, "image-area"],
                            [1, "row"],
                            [1, "col-lg-4"],
                            ["href", "#", "target", "_blank"],
                            ["src", "assets/img/home-one/blog1.jpg", "alt", "Instagram"],
                            ["src", "assets/img/home-one/blog2.jpg", "alt", "Instagram"],
                            ["src", "assets/img/home-one/blog3.jpg", "alt", "Instagram"],
                            ["src", "assets/img/home-one/blog4.jpg", "alt", "Instagram"],
                            ["src", "assets/img/home-one/blog5.jpg", "alt", "Instagram"],
                            ["src", "assets/img/home-one/blog6.jpg", "alt", "Instagram"],
                            [1, "social-area"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-linkedin"],
                            [1, "bx", "bxl-instagram"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "div", 0), o(1, "div", 1), o(2, "a", 2), f(3, "img", 3), s(), s(), o(4, "div", 4), o(5, "div", 5), o(6, "nav", 6), o(7, "a", 7), f(8, "img", 8), f(9, "img", 9), s(), o(10, "div", 10), o(11, "ul", 11), o(12, "li", 12), o(13, "a", 13), d(14, "Home "), f(15, "i", 14), s(), o(16, "ul", 15), o(17, "li", 12), o(18, "a", 16), d(19, "Home Page One"), s(), s(), o(20, "li", 12), o(21, "a", 17), d(22, "Home Page Two"), s(), s(), o(23, "li", 12), o(24, "a", 18), d(25, "Home Page Three"), s(), s(), s(), s(), o(26, "li", 12), o(27, "a", 19), d(28, "About"), s(), s(), o(29, "li", 12), o(30, "a", 20), d(31, "Categories"), s(), s(), o(32, "li", 12), o(33, "a", 13), d(34, "Services "), f(35, "i", 14), s(), o(36, "ul", 15), o(37, "li", 12), o(38, "a", 21), d(39, "Services"), s(), s(), o(40, "li", 12), o(41, "a", 22), d(42, "Services Details"), s(), s(), s(), s(), o(43, "li", 12), o(44, "a", 13), d(45, "Blog "), f(46, "i", 14), s(), o(47, "ul", 15), o(48, "li", 12), o(49, "a", 23), d(50, "Blog"), s(), s(), o(51, "li", 12), o(52, "a", 24), d(53, "Blog Details"), s(), s(), s(), s(), o(54, "li", 12), o(55, "a", 13), d(56, "Pages "), f(57, "i", 14), s(), o(58, "ul", 15), o(59, "li", 12), o(60, "a", 25), d(61, "Food Collection"), s(), s(), o(62, "li", 12), o(63, "a", 26), d(64, "Online Order"), s(), s(), o(65, "li", 12), o(66, "a", 27), d(67, "Chefs"), s(), s(), o(68, "li", 12), o(69, "a", 28), d(70, "Book A Table"), s(), s(), o(71, "li", 12), o(72, "a", 29), d(73, "Cart"), s(), s(), o(74, "li", 12), o(75, "a", 30), d(76, "Checkout"), s(), s(), o(77, "li", 12), o(78, "a", 31), d(79, "Coming Soon"), s(), s(), o(80, "li", 12), o(81, "a", 32), d(82, "FAQ"), s(), s(), o(83, "li", 12), o(84, "a", 33), d(85, "Terms & Conditions"), s(), s(), o(86, "li", 12), o(87, "a", 34), d(88, "Privacy Policy"), s(), s(), o(89, "li", 12), o(90, "a", 35), d(91, "404 Error"), s(), s(), s(), s(), o(92, "li", 12), o(93, "a", 36), d(94, "Contact"), s(), s(), s(), o(95, "div", 37), o(96, "a", 38), f(97, "i", 39), o(98, "span"), d(99, "1"), s(), s(), o(100, "button", 40), f(101, "i", 41), s(), s(), s(), s(), s(), s(), s(), o(102, "div", 42), o(103, "div", 43), o(104, "div", 44), o(105, "div", 45), f(106, "img", 46), o(107, "button", 47), o(108, "span", 48), d(109, "\xd7"), s(), s(), s(), o(110, "div", 49), o(111, "h2"), d(112, "About Us"), s(), o(113, "p"), d(114, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid quas qui minus! Dolor, ad. Odit, ullam perspiciatis nesciunt numquam explicabo, sunt ipsa libero ipsum maiores officia eius reprehenderit exercitationem."), s(), o(115, "div", 50), o(116, "h2"), d(117, "Instagram"), s(), o(118, "div", 51), o(119, "div", 52), o(120, "a", 53), f(121, "img", 54), s(), s(), o(122, "div", 52), o(123, "a", 53), f(124, "img", 55), s(), s(), o(125, "div", 52), o(126, "a", 53), f(127, "img", 56), s(), s(), o(128, "div", 52), o(129, "a", 53), f(130, "img", 57), s(), s(), o(131, "div", 52), o(132, "a", 53), f(133, "img", 58), s(), s(), o(134, "div", 52), o(135, "a", 53), f(136, "img", 59), s(), s(), s(), s(), o(137, "div", 60), o(138, "h3"), d(139, "Our Social Contact"), s(), o(140, "ul"), o(141, "li"), o(142, "a", 53), f(143, "i", 61), s(), s(), o(144, "li"), o(145, "a", 53), f(146, "i", 62), s(), s(), o(147, "li"), o(148, "a", 53), f(149, "i", 63), s(), s(), o(150, "li"), o(151, "a", 53), f(152, "i", 64), s(), s(), s(), s(), s(), s(), s(), s()), 2 & n && (S(18), x("routerLinkActiveOptions", T(21, xe)), S(3), x("routerLinkActiveOptions", T(22, xe)), S(3), x("routerLinkActiveOptions", T(23, xe)), S(3), x("routerLinkActiveOptions", T(24, xe)), S(3), x("routerLinkActiveOptions", T(25, xe)), S(8), x("routerLinkActiveOptions", T(26, xe)), S(3), x("routerLinkActiveOptions", T(27, xe)), S(8), x("routerLinkActiveOptions", T(28, xe)), S(3), x("routerLinkActiveOptions", T(29, xe)), S(8), x("routerLinkActiveOptions", T(30, xe)), S(3), x("routerLinkActiveOptions", T(31, xe)), S(3), x("routerLinkActiveOptions", T(32, xe)), S(3), x("routerLinkActiveOptions", T(33, xe)), S(3), x("routerLinkActiveOptions", T(34, xe)), S(3), x("routerLinkActiveOptions", T(35, xe)), S(3), x("routerLinkActiveOptions", T(36, xe)), S(3), x("routerLinkActiveOptions", T(37, xe)), S(3), x("routerLinkActiveOptions", T(38, xe)), S(3), x("routerLinkActiveOptions", T(39, xe)), S(3), x("routerLinkActiveOptions", T(40, xe)), S(3), x("routerLinkActiveOptions", T(41, xe)))
                        },
                        directives: [le, fl],
                        styles: [""]
                    }), e
                })(),
                ze = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-footer-style-two"]
                        ],
                        decls: 98,
                        vars: 0,
                        consts: [
                            [1, "footer-area-two", "pt-100", "pb-70"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "footer-item"],
                            [1, "footer-logo"],
                            ["routerLink", "/"],
                            ["src", "assets/img/logo-two.png", "alt", "Logo"],
                            [1, "footer-subscribe", "footer-subscriber-two"],
                            ["type", "email", "placeholder", "Enter your email", 1, "form-control"],
                            ["type", "submit", 1, "btn", "footer-btn"],
                            [1, "bx", "bxs-send", "bx-flashing"],
                            [1, "footer-services"],
                            ["routerLink", "/contact"],
                            [1, "bx", "bx-chevron-right"],
                            ["routerLink", "/about"],
                            ["routerLink", "/chefs"],
                            ["routerLink", "/blog"],
                            ["routerLink", "/privacy-policy"],
                            ["routerLink", "/services"],
                            ["routerLink", "/food-collection"],
                            ["routerLink", "/online-order"],
                            ["href", "tel:+1123456789"],
                            [1, "bx", "bx-phone-call"],
                            ["href", "tel:+5143456768"],
                            ["href", "mailto:info@spiz.com"],
                            [1, "bx", "bx-message-detail"],
                            ["href", "mailto:hello@spiz.com"],
                            [1, "bx", "bx-location-plus"],
                            [1, "copyright-area", "copyright-area-two"],
                            [1, "copyright-item"],
                            ["href", "https://hibootstrap.com/", "target", "_blank"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "footer", 0), o(1, "div", 1), o(2, "div", 2), o(3, "div", 3), o(4, "div", 4), o(5, "div", 5), o(6, "a", 6), f(7, "img", 7), s(), o(8, "p"), d(9, "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), o(10, "div", 8), f(11, "input", 9), o(12, "button", 10), f(13, "i", 11), s(), s(), s(), s(), s(), o(14, "div", 3), o(15, "div", 4), o(16, "div", 12), o(17, "h3"), d(18, "Services"), s(), o(19, "ul"), o(20, "li"), o(21, "a", 13), f(22, "i", 14), d(23, " Support"), s(), s(), o(24, "li"), o(25, "a", 15), f(26, "i", 14), d(27, " About"), s(), s(), o(28, "li"), o(29, "a", 16), f(30, "i", 14), d(31, " Chefs"), s(), s(), o(32, "li"), o(33, "a", 17), f(34, "i", 14), d(35, " Blog"), s(), s(), o(36, "li"), o(37, "a", 18), f(38, "i", 14), d(39, " Privacy Policy"), s(), s(), s(), s(), s(), s(), o(40, "div", 3), o(41, "div", 4), o(42, "div", 12), o(43, "h3"), d(44, "Quick Links"), s(), o(45, "ul"), o(46, "li"), o(47, "a", 19), f(48, "i", 14), d(49, " Services"), s(), s(), o(50, "li"), o(51, "a", 20), f(52, "i", 14), d(53, " Food Collection"), s(), s(), o(54, "li"), o(55, "a", 21), f(56, "i", 14), d(57, " Online Order"), s(), s(), o(58, "li"), o(59, "a", 17), f(60, "i", 14), d(61, " Blog"), s(), s(), o(62, "li"), o(63, "a", 13), f(64, "i", 14), d(65, " Contact"), s(), s(), s(), s(), s(), s(), o(66, "div", 3), o(67, "div", 4), o(68, "div", 12), o(69, "h3"), d(70, "Contact Us"), s(), o(71, "ul"), o(72, "li"), o(73, "a", 22), f(74, "i", 23), d(75, " +1 1234 56 789"), s(), s(), o(76, "li"), o(77, "a", 24), f(78, "i", 23), d(79, " +5 1434 56 768"), s(), s(), o(80, "li"), o(81, "a", 25), f(82, "i", 26), d(83, " info@spiz.com"), s(), s(), o(84, "li"), o(85, "a", 27), f(86, "i", 26), d(87, " hello@spiz.com"), s(), s(), o(88, "li"), f(89, "i", 28), d(90, " Br1. 28/A Street, New York, USA"), s(), s(), s(), s(), s(), s(), s(), s(), o(91, "div", 29), o(92, "div", 1), o(93, "div", 30), o(94, "p"), d(95, "Copyright @2021 Spiz. All Rights Reserved By "), o(96, "a", 31), d(97, "HiBootstrap"), s(), s(), s(), s(), s())
                        },
                        directives: [le],
                        styles: [""]
                    }), e
                })(),
                $M = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-home-two"]
                        ],
                        decls: 645,
                        vars: 0,
                        consts: [
                            [1, "banner-area-two"],
                            [1, "banner-shape"],
                            ["src", "assets/img/home-two/banner/1.png", "alt", "Shape"],
                            ["src", "assets/img/home-two/banner/2.png", "alt", "Shape"],
                            ["src", "assets/img/home-two/banner/3.png", "alt", "Shape"],
                            [1, "container"],
                            [1, "banner-content"],
                            [1, "banner-btn-wrap"],
                            ["routerLink", "/online-order", 1, "cmn-btn"],
                            ["routerLink", "/contact", 1, "banner-btn-two"],
                            [1, "banner-img"],
                            ["src", "assets/img/home-two/banner/banner-main.png", "alt", "Banner"],
                            [1, "food-img-area", "pb-70"],
                            [1, "row"],
                            [1, "col-6", "col-sm-4", "col-lg-2"],
                            [1, "food-img-item"],
                            ["src", "assets/img/home-two/banner/food1.png", "alt", "Food"],
                            ["src", "assets/img/home-two/banner/food2.png", "alt", "Food"],
                            ["src", "assets/img/home-two/banner/food3.png", "alt", "Food"],
                            ["src", "assets/img/home-two/banner/food4.png", "alt", "Food"],
                            ["src", "assets/img/home-two/banner/food5.png", "alt", "Food"],
                            ["src", "assets/img/home-two/banner/food6.png", "alt", "Food"],
                            [1, "about-area"],
                            [1, "about-shape"],
                            ["src", "assets/img/home-two/about3.png", "alt", "Shape"],
                            ["src", "assets/img/home-two/about4.png", "alt", "Shape"],
                            ["src", "assets/img/home-two/about5.png", "alt", "Shape"],
                            ["src", "assets/img/home-two/about6.png", "alt", "Shape"],
                            ["src", "assets/img/home-two/about7.png", "alt", "Shape"],
                            [1, "container-fluid", "p-0"],
                            [1, "row", "m-0", "align-items-center"],
                            [1, "col-lg-6", "p-0"],
                            [1, "about-img"],
                            ["src", "assets/img/home-two/about1.png", "alt", "About"],
                            ["src", "assets/img/home-two/about2.png", "alt", "About"],
                            [1, "col-lg-6"],
                            [1, "about-content"],
                            [1, "section-title"],
                            [1, "sub-title"],
                            ["routerLink", "/services-details", 1, "cmn-btn"],
                            [1, "services-area", "services-area-two", "ptb-100"],
                            [1, "services-slider", "owl-theme", "owl-carousel"],
                            [1, "services-item"],
                            ["routerLink", "/services-details"],
                            ["src", "assets/img/home-one/services1.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "services-image", 1, "service-shape"],
                            ["src", "assets/img/home-one/services2.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services3.png", "alt", "services-image"],
                            [1, "collection-area", "collection-area-two", "ptb-100"],
                            [1, "sorting-menu"],
                            ["data-filter", "all", 1, "filter", "active"],
                            ["data-filter", ".web", 1, "filter"],
                            ["data-filter", ".ui", 1, "filter"],
                            ["data-filter", ".ux", 1, "filter"],
                            ["data-filter", ".branding", 1, "filter"],
                            ["id", "Container", 1, "row"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "ui"],
                            [1, "collection-item"],
                            [1, "collection-top"],
                            ["src", "assets/img/home-one/collection/1.jpg", "alt", "Collection"],
                            [1, "bx", "bxs-star", "checked"],
                            [1, "add-cart"],
                            ["routerLink", "/cart"],
                            [1, "bx", "bxs-cart"],
                            [1, "collection-bottom"],
                            [1, "number"],
                            [1, "minus"],
                            ["type", "text", "value", "1", 1, "form-control"],
                            [1, "plus"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui"],
                            ["src", "assets/img/home-one/collection/2.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "ui"],
                            ["src", "assets/img/home-one/collection/3.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "web"],
                            ["src", "assets/img/home-one/collection/4.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "branding"],
                            ["src", "assets/img/home-one/collection/5.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui", "web"],
                            ["src", "assets/img/home-one/collection/6.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "branding"],
                            ["src", "assets/img/home-one/collection/7.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "ui"],
                            ["src", "assets/img/home-one/collection/8.jpg", "alt", "Collection"],
                            [1, "more-collection"],
                            ["routerLink", "/food-collection"],
                            [1, "download-area", "pt-100", "pb-70"],
                            [1, "row", "align-items-center"],
                            [1, "download-content"],
                            [1, "app-wrap"],
                            ["href", "#"],
                            ["src", "assets/img/home-two/google-store.png", "alt", "Google"],
                            ["src", "assets/img/home-two/app-store.png", "alt", "App"],
                            [1, "download-img"],
                            ["src", "assets/img/home-two/download1.png", "alt", "Download"],
                            [1, "join-area"],
                            [1, "join-img"],
                            ["src", "assets/img/home-two/join1.png", "alt", "Join"],
                            [1, "join-content"],
                            ["routerLink", "/contact", 1, "cmn-btn"],
                            [1, "chef-area", "chef-area-two", "pb-70"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "chef-item"],
                            [1, "chef-top"],
                            ["src", "assets/img/home-one/chef/1.jpg", "alt", "Chef"],
                            [1, "chef-inner"],
                            [1, "chef-bottom"],
                            ["target", "_blank", "href", "#"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            ["src", "assets/img/home-one/chef/6.jpg", "alt", "Chef"],
                            [1, "chef-item", "active"],
                            ["src", "assets/img/home-one/chef/3.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/7.jpg", "alt", "Chef"],
                            [1, "review-area", "review-area-two"],
                            [1, "review-shape"],
                            ["src", "assets/img/home-two/review2.png", "alt", "Review"],
                            [1, "review-img"],
                            ["src", "assets/img/home-two/review1.jpg", "alt", "Review"],
                            [1, "review-item"],
                            [1, "slider-nav"],
                            [1, "item"],
                            ["src", "assets/img/home-one/review3.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review4.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review5.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review6.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review7.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review8.png", "alt", "image", "draggable", "false"],
                            [1, "slider-for"],
                            [1, "blog-area", "ptb-100"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "blog-item"],
                            [1, "blog-top"],
                            ["routerLink", "/blog-detailhtml"],
                            ["src", "assets/img/home-one/blog1.jpg", "alt", "Blog"],
                            [1, "blog-bottom"],
                            ["routerLink", "/blog-detailhtml", 1, "cmn-btn"],
                            ["src", "assets/img/home-one/blog2.jpg", "alt", "Blog"],
                            [1, "col-sm-6", "offset-sm-3", "offset-lg-0", "col-lg-4"],
                            ["src", "assets/img/home-one/blog3.jpg", "alt", "Blog"],
                            [1, "text-center"],
                            ["routerLink", "/blog", 1, "read-blog-btn"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-two"), o(1, "div", 0), o(2, "div", 1), f(3, "img", 2), f(4, "img", 3), f(5, "img", 4), s(), o(6, "div", 5), o(7, "div", 6), o(8, "h1"), d(9, "Free Home Delivery Within an Hour"), s(), o(10, "p"), d(11, "A restaurant or an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many."), s(), o(12, "div", 7), o(13, "a", 8), d(14, "Order Now"), s(), o(15, "a", 9), d(16, "Get Free Call"), s(), s(), s(), o(17, "div", 10), f(18, "img", 11), s(), s(), s(), o(19, "div", 12), o(20, "div", 5), o(21, "div", 13), o(22, "div", 14), o(23, "div", 15), f(24, "img", 16), s(), s(), o(25, "div", 14), o(26, "div", 15), f(27, "img", 17), s(), s(), o(28, "div", 14), o(29, "div", 15), f(30, "img", 18), s(), s(), o(31, "div", 14), o(32, "div", 15), f(33, "img", 19), s(), s(), o(34, "div", 14), o(35, "div", 15), f(36, "img", 20), s(), s(), o(37, "div", 14), o(38, "div", 15), f(39, "img", 21), s(), s(), s(), s(), s(), o(40, "div", 22), o(41, "div", 23), f(42, "img", 24), f(43, "img", 25), f(44, "img", 26), f(45, "img", 27), f(46, "img", 28), s(), o(47, "div", 29), o(48, "div", 30), o(49, "div", 31), o(50, "div", 32), f(51, "img", 33), f(52, "img", 34), s(), s(), o(53, "div", 35), o(54, "div", 36), o(55, "div", 37), o(56, "span", 38), d(57, "About Us"), s(), o(58, "h2"), d(59, "Spiz is One Of The Most Hygienic & Trusted Food Service"), s(), o(60, "p"), d(61, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), s(), o(62, "p"), d(63, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby."), s(), s(), o(64, "a", 39), d(65, "Know More"), s(), s(), s(), s(), s(), s(), o(66, "section", 40), o(67, "div", 5), o(68, "div", 37), o(69, "h2"), d(70, "What Spiz Services"), s(), o(71, "p"), d(72, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(73, "div", 41), o(74, "div", 42), o(75, "a", 43), f(76, "img", 44), f(77, "img", 45), o(78, "h3"), d(79, "Fresh Healthy Food"), s(), o(80, "p"), d(81, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(82, "div", 42), o(83, "a", 43), f(84, "img", 46), f(85, "img", 45), o(86, "h3"), d(87, "Free Fast Home Delivery"), s(), o(88, "p"), d(89, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(90, "div", 42), o(91, "a", 43), f(92, "img", 47), f(93, "img", 45), o(94, "h3"), d(95, "Discount Voucher"), s(), o(96, "p"), d(97, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(98, "div", 42), o(99, "a", 43), f(100, "img", 47), f(101, "img", 45), o(102, "h3"), d(103, "Discount Voucher"), s(), o(104, "p"), d(105, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), s(), s(), o(106, "section", 48), o(107, "div", 5), o(108, "div", 37), o(109, "h2"), d(110, "Our Regular Food Collections"), s(), o(111, "p"), d(112, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(113, "div", 49), o(114, "ul"), o(115, "li", 50), d(116, "All"), s(), o(117, "li", 51), d(118, "Fast Food"), s(), o(119, "li", 52), d(120, "Platters"), s(), o(121, "li", 53), d(122, "Dessert"), s(), o(123, "li", 54), d(124, "Asian Food"), s(), s(), s(), o(125, "div", 55), o(126, "div", 56), o(127, "div", 57), o(128, "div", 58), f(129, "img", 59), o(130, "ul"), o(131, "li"), f(132, "i", 60), s(), o(133, "li"), f(134, "i", 60), s(), o(135, "li"), f(136, "i", 60), s(), o(137, "li"), f(138, "i", 60), s(), o(139, "li"), f(140, "i", 60), s(), s(), o(141, "div", 61), o(142, "a", 62), f(143, "i", 63), d(144, " Add to Cart"), s(), s(), s(), o(145, "div", 64), o(146, "h3"), d(147, "Dark Chocolate Cake"), s(), o(148, "ul"), o(149, "li"), o(150, "span"), d(151, "$25"), s(), s(), o(152, "li"), o(153, "div", 65), o(154, "span", 66), d(155, "-"), s(), f(156, "input", 67), o(157, "span", 68), d(158, "+"), s(), s(), s(), s(), s(), s(), s(), o(159, "div", 69), o(160, "div", 57), o(161, "div", 58), f(162, "img", 70), o(163, "ul"), o(164, "li"), f(165, "i", 60), s(), o(166, "li"), f(167, "i", 60), s(), o(168, "li"), f(169, "i", 60), s(), o(170, "li"), f(171, "i", 60), s(), o(172, "li"), f(173, "i", 60), s(), s(), o(174, "div", 61), o(175, "a", 62), f(176, "i", 63), d(177, " Add to Cart"), s(), s(), s(), o(178, "div", 64), o(179, "h3"), d(180, "Cake with Drinks"), s(), o(181, "ul"), o(182, "li"), o(183, "span"), d(184, "$15"), s(), s(), o(185, "li"), o(186, "div", 65), o(187, "span", 66), d(188, "-"), s(), f(189, "input", 67), o(190, "span", 68), d(191, "+"), s(), s(), s(), s(), s(), s(), s(), o(192, "div", 71), o(193, "div", 57), o(194, "div", 58), f(195, "img", 72), o(196, "ul"), o(197, "li"), f(198, "i", 60), s(), o(199, "li"), f(200, "i", 60), s(), o(201, "li"), f(202, "i", 60), s(), o(203, "li"), f(204, "i", 60), s(), o(205, "li"), f(206, "i", 60), s(), s(), o(207, "div", 61), o(208, "a", 62), f(209, "i", 63), d(210, " Add to Cart"), s(), s(), s(), o(211, "div", 64), o(212, "h3"), d(213, "Doughnut Chocolate"), s(), o(214, "ul"), o(215, "li"), o(216, "span"), d(217, "$20"), s(), s(), o(218, "li"), o(219, "div", 65), o(220, "span", 66), d(221, "-"), s(), f(222, "input", 67), o(223, "span", 68), d(224, "+"), s(), s(), s(), s(), s(), s(), s(), o(225, "div", 73), o(226, "div", 57), o(227, "div", 58), f(228, "img", 74), o(229, "ul"), o(230, "li"), f(231, "i", 60), s(), o(232, "li"), f(233, "i", 60), s(), o(234, "li"), f(235, "i", 60), s(), o(236, "li"), f(237, "i", 60), s(), o(238, "li"), f(239, "i", 60), s(), s(), o(240, "div", 61), o(241, "a", 62), f(242, "i", 63), d(243, " Add to Cart"), s(), s(), s(), o(244, "div", 64), o(245, "h3"), d(246, "Dark Chocolate Cake"), s(), o(247, "ul"), o(248, "li"), o(249, "span"), d(250, "$23"), s(), s(), o(251, "li"), o(252, "div", 65), o(253, "span", 66), d(254, "-"), s(), f(255, "input", 67), o(256, "span", 68), d(257, "+"), s(), s(), s(), s(), s(), s(), s(), o(258, "div", 75), o(259, "div", 57), o(260, "div", 58), f(261, "img", 76), o(262, "ul"), o(263, "li"), f(264, "i", 60), s(), o(265, "li"), f(266, "i", 60), s(), o(267, "li"), f(268, "i", 60), s(), o(269, "li"), f(270, "i", 60), s(), o(271, "li"), f(272, "i", 60), s(), s(), o(273, "div", 61), o(274, "a", 62), f(275, "i", 63), d(276, " Add to Cart"), s(), s(), s(), o(277, "div", 64), o(278, "h3"), d(279, "Sweet Dougnuts"), s(), o(280, "ul"), o(281, "li"), o(282, "span"), d(283, "$35"), s(), s(), o(284, "li"), o(285, "div", 65), o(286, "span", 66), d(287, "-"), s(), f(288, "input", 67), o(289, "span", 68), d(290, "+"), s(), s(), s(), s(), s(), s(), s(), o(291, "div", 77), o(292, "div", 57), o(293, "div", 58), f(294, "img", 78), o(295, "ul"), o(296, "li"), f(297, "i", 60), s(), o(298, "li"), f(299, "i", 60), s(), o(300, "li"), f(301, "i", 60), s(), o(302, "li"), f(303, "i", 60), s(), o(304, "li"), f(305, "i", 60), s(), s(), o(306, "div", 61), o(307, "a", 62), f(308, "i", 63), d(309, " Add to Cart"), s(), s(), s(), o(310, "div", 64), o(311, "h3"), d(312, "Birthday Cake"), s(), o(313, "ul"), o(314, "li"), o(315, "span"), d(316, "$32"), s(), s(), o(317, "li"), o(318, "div", 65), o(319, "span", 66), d(320, "-"), s(), f(321, "input", 67), o(322, "span", 68), d(323, "+"), s(), s(), s(), s(), s(), s(), s(), o(324, "div", 79), o(325, "div", 57), o(326, "div", 58), f(327, "img", 80), o(328, "ul"), o(329, "li"), f(330, "i", 60), s(), o(331, "li"), f(332, "i", 60), s(), o(333, "li"), f(334, "i", 60), s(), o(335, "li"), f(336, "i", 60), s(), o(337, "li"), f(338, "i", 60), s(), s(), o(339, "div", 61), o(340, "a", 62), f(341, "i", 63), d(342, " Add to Cart"), s(), s(), s(), o(343, "div", 64), o(344, "h3"), d(345, "Chocolate Ice Cream"), s(), o(346, "ul"), o(347, "li"), o(348, "span"), d(349, "$28"), s(), s(), o(350, "li"), o(351, "div", 65), o(352, "span", 66), d(353, "-"), s(), f(354, "input", 67), o(355, "span", 68), d(356, "+"), s(), s(), s(), s(), s(), s(), s(), o(357, "div", 81), o(358, "div", 57), o(359, "div", 58), f(360, "img", 82), o(361, "ul"), o(362, "li"), f(363, "i", 60), s(), o(364, "li"), f(365, "i", 60), s(), o(366, "li"), f(367, "i", 60), s(), o(368, "li"), f(369, "i", 60), s(), o(370, "li"), f(371, "i", 60), s(), s(), o(372, "div", 61), o(373, "a", 62), f(374, "i", 63), d(375, " Add to Cart"), s(), s(), s(), o(376, "div", 64), o(377, "h3"), d(378, "Dark Chocolate Cake"), s(), o(379, "ul"), o(380, "li"), o(381, "span"), d(382, "$27"), s(), s(), o(383, "li"), o(384, "div", 65), o(385, "span", 66), d(386, "-"), s(), f(387, "input", 67), o(388, "span", 68), d(389, "+"), s(), s(), s(), s(), s(), s(), s(), s(), o(390, "div", 83), o(391, "a", 84), d(392, "View More Colletction"), s(), s(), s(), s(), o(393, "section", 85), o(394, "div", 5), o(395, "div", 86), o(396, "div", 35), o(397, "div", 87), o(398, "div", 37), o(399, "span", 38), d(400, "Download"), s(), o(401, "h2"), d(402, "Download Our Mobile App That Make You More Easy to Order"), s(), o(403, "p"), d(404, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(405, "ul"), o(406, "li"), o(407, "span"), d(408, "01"), s(), d(409, " Select Your Food"), s(), o(410, "li"), o(411, "span"), d(412, "02"), s(), d(413, " Add to Cart"), s(), o(414, "li"), o(415, "span"), d(416, "03"), s(), d(417, " Order Your Food"), s(), s(), o(418, "div", 88), o(419, "a", 89), f(420, "img", 90), s(), o(421, "a", 89), f(422, "img", 91), s(), s(), s(), s(), o(423, "div", 35), o(424, "div", 92), f(425, "img", 93), s(), s(), s(), s(), s(), o(426, "div", 94), o(427, "div", 5), o(428, "div", 13), o(429, "div", 35), o(430, "div", 95), f(431, "img", 96), s(), s(), o(432, "div", 35), o(433, "div", 97), o(434, "div", 37), o(435, "h2"), d(436, "Join As a Delivery Man"), s(), o(437, "p"), d(438, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(439, "a", 98), d(440, "Apply Now"), s(), s(), s(), s(), s(), s(), o(441, "section", 99), o(442, "div", 5), o(443, "div", 37), o(444, "h2"), d(445, "Our Special Chefs"), s(), o(446, "p"), d(447, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(448, "div", 13), o(449, "div", 100), o(450, "div", 101), o(451, "div", 102), f(452, "img", 103), o(453, "div", 104), o(454, "h3"), d(455, "John Doe"), s(), o(456, "span"), d(457, "Head of Chef"), s(), s(), s(), o(458, "div", 105), o(459, "ul"), o(460, "li"), o(461, "a", 106), f(462, "i", 107), s(), s(), o(463, "li"), o(464, "a", 106), f(465, "i", 108), s(), s(), o(466, "li"), o(467, "a", 106), f(468, "i", 109), s(), s(), s(), s(), s(), s(), o(469, "div", 100), o(470, "div", 101), o(471, "div", 102), f(472, "img", 110), o(473, "div", 104), o(474, "h3"), d(475, "John Smith"), s(), o(476, "span"), d(477, "Assistant Chef"), s(), s(), s(), o(478, "div", 105), o(479, "ul"), o(480, "li"), o(481, "a", 106), f(482, "i", 107), s(), s(), o(483, "li"), o(484, "a", 106), f(485, "i", 108), s(), s(), o(486, "li"), o(487, "a", 106), f(488, "i", 109), s(), s(), s(), s(), s(), s(), o(489, "div", 100), o(490, "div", 111), o(491, "div", 102), f(492, "img", 112), o(493, "div", 104), o(494, "h3"), d(495, "Evanaa"), s(), o(496, "span"), d(497, "Intern Chef"), s(), s(), s(), o(498, "div", 105), o(499, "ul"), o(500, "li"), o(501, "a", 106), f(502, "i", 107), s(), s(), o(503, "li"), o(504, "a", 106), f(505, "i", 108), s(), s(), o(506, "li"), o(507, "a", 106), f(508, "i", 109), s(), s(), s(), s(), s(), s(), o(509, "div", 100), o(510, "div", 101), o(511, "div", 102), f(512, "img", 113), o(513, "div", 104), o(514, "h3"), d(515, "Knot Doe"), s(), o(516, "span"), d(517, "Asst. Chef"), s(), s(), s(), o(518, "div", 105), o(519, "ul"), o(520, "li"), o(521, "a", 106), f(522, "i", 107), s(), s(), o(523, "li"), o(524, "a", 106), f(525, "i", 108), s(), s(), o(526, "li"), o(527, "a", 106), f(528, "i", 109), s(), s(), s(), s(), s(), s(), s(), s(), s(), o(529, "div", 114), o(530, "div", 115), f(531, "img", 116), s(), o(532, "div", 5), o(533, "div", 86), o(534, "div", 35), o(535, "div", 117), f(536, "img", 118), s(), s(), o(537, "div", 35), o(538, "div", 119), o(539, "div", 37), o(540, "h2"), d(541, "What People Say About Us"), s(), o(542, "p"), d(543, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(544, "div", 120), o(545, "div", 121), f(546, "img", 122), s(), o(547, "div", 121), f(548, "img", 123), s(), o(549, "div", 121), f(550, "img", 124), s(), o(551, "div", 121), f(552, "img", 125), s(), o(553, "div", 121), f(554, "img", 126), s(), o(555, "div", 121), f(556, "img", 127), s(), s(), o(557, "div", 128), o(558, "div", 121), o(559, "h3"), d(560, "John Doe"), s(), o(561, "p"), d(562, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(563, "div", 121), o(564, "h3"), d(565, "Jac Jackson"), s(), o(566, "p"), d(567, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(568, "div", 121), o(569, "h3"), d(570, "Tom Henry"), s(), o(571, "p"), d(572, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(573, "div", 121), o(574, "h3"), d(575, "John Mic"), s(), o(576, "p"), d(577, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(578, "div", 121), o(579, "h3"), d(580, "Stark Arey"), s(), o(581, "p"), d(582, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(583, "div", 121), o(584, "h3"), d(585, "Stark Arey"), s(), o(586, "p"), d(587, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), s(), s(), s(), s(), s(), s(), o(588, "section", 129), o(589, "div", 5), o(590, "div", 37), o(591, "h2"), d(592, "Our Regular Blogs"), s(), o(593, "p"), d(594, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(595, "div", 13), o(596, "div", 130), o(597, "div", 131), o(598, "div", 132), o(599, "a", 133), f(600, "img", 134), s(), o(601, "span"), d(602, "01 May 2020"), s(), s(), o(603, "div", 135), o(604, "h3"), o(605, "a", 133), d(606, "Brief About How to Make Pasta"), s(), s(), o(607, "p"), d(608, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(609, "a", 136), d(610, "Read More"), s(), s(), s(), s(), o(611, "div", 130), o(612, "div", 131), o(613, "div", 132), o(614, "a", 133), f(615, "img", 137), s(), o(616, "span"), d(617, "02 May 2020"), s(), s(), o(618, "div", 135), o(619, "h3"), o(620, "a", 133), d(621, "Brief About How to Make Pizza"), s(), s(), o(622, "p"), d(623, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(624, "a", 136), d(625, "Read More"), s(), s(), s(), s(), o(626, "div", 138), o(627, "div", 131), o(628, "div", 132), o(629, "a", 133), f(630, "img", 139), s(), o(631, "span"), d(632, "03 May 2020"), s(), s(), o(633, "div", 135), o(634, "h3"), o(635, "a", 133), d(636, "Brief About How to Make Burger"), s(), s(), o(637, "p"), d(638, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(639, "a", 136), d(640, "Read More"), s(), s(), s(), s(), s(), o(641, "div", 140), o(642, "a", 141), d(643, "Read More Blogs"), s(), s(), s(), s(), f(644, "app-footer-style-two"))
                        },
                        directives: [UM, le, ze],
                        styles: [""]
                    }), e
                })(),
                qM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-home-three"]
                        ],
                        decls: 667,
                        vars: 0,
                        consts: [
                            [1, "banner-area-three"],
                            [1, "banner-shape"],
                            ["src", "assets/img/home-three/banner3.png", "alt", "Shape"],
                            ["src", "assets/img/home-three/banner2.png", "alt", "Shape"],
                            ["src", "assets/img/home-three/banner4.png", "alt", "Shape"],
                            [1, "container"],
                            [1, "banner-content"],
                            [1, "banner-btn-wrap"],
                            ["routerLink", "/online-order", 1, "cmn-btn"],
                            ["routerLink", "/contact", 1, "banner-btn-two"],
                            [1, "banner-img"],
                            ["src", "assets/img/home-three/banner1.jpg", "alt", "Banner"],
                            [1, "about-area-two", "pt-100", "pb-70"],
                            [1, "about-shape"],
                            ["src", "assets/img/home-three/about3.png", "alt", "Shape"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-6"],
                            [1, "about-img"],
                            ["src", "assets/img/home-three/about1.jpg", "alt", "About"],
                            ["src", "assets/img/home-three/about2.png", "alt", "About"],
                            [1, "video-wrap"],
                            ["href", "https://www.youtube.com/watch?v=aqz-KE-bpKQ", 1, "popup-youtube"],
                            [1, "bx", "bx-play"],
                            [1, "about-content"],
                            [1, "section-title"],
                            ["routerLink", "/services-details", 1, "cmn-btn"],
                            [1, "services-area-three", "pt-100", "pb-70"],
                            [1, "services-item"],
                            [1, "sub-title"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-6"],
                            [1, "accordion"],
                            [1, "services-img"],
                            ["src", "assets/img/home-three/services1.png", "alt", "services-image"],
                            [1, "collection-area", "collection-area-two", "ptb-100"],
                            [1, "sorting-menu"],
                            ["data-filter", "all", 1, "filter", "active"],
                            ["data-filter", ".web", 1, "filter"],
                            ["data-filter", ".ui", 1, "filter"],
                            ["data-filter", ".ux", 1, "filter"],
                            ["data-filter", ".branding", 1, "filter"],
                            ["id", "Container", 1, "row"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "ui"],
                            [1, "collection-item"],
                            [1, "collection-top"],
                            ["src", "assets/img/home-one/collection/1.jpg", "alt", "Collection"],
                            [1, "bx", "bxs-star", "checked"],
                            [1, "add-cart"],
                            ["routerLink", "/cart"],
                            [1, "bx", "bxs-cart"],
                            [1, "collection-bottom"],
                            [1, "number"],
                            [1, "minus"],
                            ["type", "text", "value", "1", 1, "form-control"],
                            [1, "plus"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui"],
                            ["src", "assets/img/home-one/collection/2.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "ui"],
                            ["src", "assets/img/home-one/collection/3.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "web"],
                            ["src", "assets/img/home-one/collection/4.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "branding"],
                            ["src", "assets/img/home-one/collection/5.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui", "web"],
                            ["src", "assets/img/home-one/collection/6.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "branding"],
                            ["src", "assets/img/home-one/collection/7.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "ui"],
                            ["src", "assets/img/home-one/collection/8.jpg", "alt", "Collection"],
                            [1, "more-collection"],
                            ["routerLink", "/food-collection"],
                            [1, "download-area", "pt-100", "pb-70"],
                            [1, "download-content"],
                            [1, "app-wrap"],
                            ["href", "#"],
                            ["src", "assets/img/home-two/google-store.png", "alt", "Google"],
                            ["src", "assets/img/home-two/app-store.png", "alt", "App"],
                            [1, "download-img"],
                            ["src", "assets/img/home-two/download1.png", "alt", "Download"],
                            [1, "reservation-area"],
                            [1, "reservation-shape"],
                            ["src", "assets/img/home-one/reservation-shape.png", "alt", "Shape"],
                            [1, "reservation-item"],
                            ["type", "date", "name", "arrive", 1, "form-control"],
                            ["type", "time", "name", "arrive", 1, "form-control"],
                            ["type", "submit", 1, "btn", "cmn-btn"],
                            [1, "reservation-img"],
                            ["src", "assets/img/home-one/reservation.png", "alt", "Reservation"],
                            [1, "chef-area", "chef-area-two", "pb-70"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "chef-item"],
                            [1, "chef-top"],
                            ["src", "assets/img/home-one/chef/1.jpg", "alt", "Chef"],
                            [1, "chef-inner"],
                            [1, "chef-bottom"],
                            ["target", "_blank", "href", "#"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            ["src", "assets/img/home-one/chef/6.jpg", "alt", "Chef"],
                            [1, "chef-item", "active"],
                            ["src", "assets/img/home-one/chef/3.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/7.jpg", "alt", "Chef"],
                            [1, "review-area", "review-area-two"],
                            [1, "review-shape"],
                            ["src", "assets/img/home-two/review2.png", "alt", "Review"],
                            [1, "review-img"],
                            ["src", "assets/img/home-two/review1.jpg", "alt", "Review"],
                            [1, "review-item"],
                            [1, "slider-nav"],
                            [1, "item"],
                            ["src", "assets/img/home-one/review3.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review4.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review5.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review6.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review7.png", "alt", "image", "draggable", "false"],
                            ["src", "assets/img/home-one/review8.png", "alt", "image", "draggable", "false"],
                            [1, "slider-for"],
                            [1, "blog-area", "ptb-100"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "blog-item"],
                            [1, "blog-top"],
                            ["routerLink", "/blog-detailhtml"],
                            ["src", "assets/img/home-one/blog1.jpg", "alt", "Blog"],
                            [1, "blog-bottom"],
                            ["routerLink", "/blog-detailhtml", 1, "cmn-btn"],
                            ["src", "assets/img/home-one/blog2.jpg", "alt", "Blog"],
                            [1, "col-sm-6", "offset-sm-3", "offset-lg-0", "col-lg-4"],
                            ["src", "assets/img/home-one/blog3.jpg", "alt", "Blog"],
                            [1, "text-center"],
                            ["routerLink", "/blog", 1, "read-blog-btn"],
                            [1, "join-area", "join-area-two"],
                            [1, "join-img"],
                            ["src", "assets/img/home-two/join1.png", "alt", "Join"],
                            [1, "join-content"],
                            ["routerLink", "/contact", 1, "cmn-btn"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-one"), o(1, "div", 0), o(2, "div", 1), f(3, "img", 2), f(4, "img", 3), f(5, "img", 4), s(), o(6, "div", 5), o(7, "div", 6), o(8, "h1"), d(9, "Make Your Party With Delicious Dishes"), s(), o(10, "p"), d(11, "A restaurant or an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many."), s(), o(12, "div", 7), o(13, "a", 8), d(14, "Order Now"), s(), o(15, "a", 9), d(16, "Get Free Call"), s(), s(), s(), o(17, "div", 10), f(18, "img", 11), s(), s(), s(), o(19, "div", 12), o(20, "div", 13), f(21, "img", 14), s(), o(22, "div", 5), o(23, "div", 15), o(24, "div", 16), o(25, "div", 17), f(26, "img", 18), f(27, "img", 19), o(28, "div", 20), o(29, "a", 21), f(30, "i", 22), s(), s(), s(), s(), o(31, "div", 16), o(32, "div", 23), o(33, "div", 24), o(34, "h2"), d(35, "About Us"), s(), o(36, "p"), d(37, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), o(38, "p"), d(39, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby."), s(), s(), o(40, "a", 25), d(41, "Know More"), s(), s(), s(), s(), s(), s(), o(42, "section", 26), o(43, "div", 5), o(44, "div", 15), o(45, "div", 16), o(46, "div", 27), o(47, "div", 24), o(48, "span", 28), d(49, "Sevices"), s(), o(50, "h2"), d(51, "Spiz Services"), s(), o(52, "p"), d(53, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(54, "div", 29), o(55, "div", 30), o(56, "ul", 31), o(57, "li"), o(58, "a"), o(59, "span"), d(60, "01."), s(), d(61, "Fresh Healthy Food"), s(), o(62, "p"), d(63, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"), s(), s(), o(64, "li"), o(65, "a"), o(66, "span"), d(67, "02."), s(), d(68, "Quality Services"), s(), o(69, "p"), d(70, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"), s(), s(), o(71, "li"), o(72, "a"), o(73, "span"), d(74, "03."), s(), d(75, "Free Home Delivery"), s(), o(76, "p"), d(77, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"), s(), s(), s(), s(), o(78, "div", 30), o(79, "ul", 31), o(80, "li"), o(81, "a"), o(82, "span"), d(83, "04."), s(), d(84, "Discount Voucher"), s(), o(85, "p"), d(86, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"), s(), s(), o(87, "li"), o(88, "a"), o(89, "span"), d(90, "05."), s(), d(91, "Party Center"), s(), o(92, "p"), d(93, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"), s(), s(), o(94, "li"), o(95, "a"), o(96, "span"), d(97, "06."), s(), d(98, "Our Convension"), s(), o(99, "p"), d(100, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"), s(), s(), s(), s(), s(), s(), s(), o(101, "div", 16), o(102, "div", 32), f(103, "img", 33), s(), s(), s(), s(), s(), o(104, "section", 34), o(105, "div", 5), o(106, "div", 24), o(107, "h2"), d(108, "Our Regular Food Collections"), s(), o(109, "p"), d(110, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(111, "div", 35), o(112, "ul"), o(113, "li", 36), d(114, "All"), s(), o(115, "li", 37), d(116, "Fast Food"), s(), o(117, "li", 38), d(118, "Platters"), s(), o(119, "li", 39), d(120, "Dessert"), s(), o(121, "li", 40), d(122, "Asian Food"), s(), s(), s(), o(123, "div", 41), o(124, "div", 42), o(125, "div", 43), o(126, "div", 44), f(127, "img", 45), o(128, "ul"), o(129, "li"), f(130, "i", 46), s(), o(131, "li"), f(132, "i", 46), s(), o(133, "li"), f(134, "i", 46), s(), o(135, "li"), f(136, "i", 46), s(), o(137, "li"), f(138, "i", 46), s(), s(), o(139, "div", 47), o(140, "a", 48), f(141, "i", 49), d(142, " Add to Cart"), s(), s(), s(), o(143, "div", 50), o(144, "h3"), d(145, "Dark Chocolate Cake"), s(), o(146, "ul"), o(147, "li"), o(148, "span"), d(149, "$25"), s(), s(), o(150, "li"), o(151, "div", 51), o(152, "span", 52), d(153, "-"), s(), f(154, "input", 53), o(155, "span", 54), d(156, "+"), s(), s(), s(), s(), s(), s(), s(), o(157, "div", 55), o(158, "div", 43), o(159, "div", 44), f(160, "img", 56), o(161, "ul"), o(162, "li"), f(163, "i", 46), s(), o(164, "li"), f(165, "i", 46), s(), o(166, "li"), f(167, "i", 46), s(), o(168, "li"), f(169, "i", 46), s(), o(170, "li"), f(171, "i", 46), s(), s(), o(172, "div", 47), o(173, "a", 48), f(174, "i", 49), d(175, " Add to Cart"), s(), s(), s(), o(176, "div", 50), o(177, "h3"), d(178, "Cake with Drinks"), s(), o(179, "ul"), o(180, "li"), o(181, "span"), d(182, "$15"), s(), s(), o(183, "li"), o(184, "div", 51), o(185, "span", 52), d(186, "-"), s(), f(187, "input", 53), o(188, "span", 54), d(189, "+"), s(), s(), s(), s(), s(), s(), s(), o(190, "div", 57), o(191, "div", 43), o(192, "div", 44), f(193, "img", 58), o(194, "ul"), o(195, "li"), f(196, "i", 46), s(), o(197, "li"), f(198, "i", 46), s(), o(199, "li"), f(200, "i", 46), s(), o(201, "li"), f(202, "i", 46), s(), o(203, "li"), f(204, "i", 46), s(), s(), o(205, "div", 47), o(206, "a", 48), f(207, "i", 49), d(208, " Add to Cart"), s(), s(), s(), o(209, "div", 50), o(210, "h3"), d(211, "Doughnut Chocolate"), s(), o(212, "ul"), o(213, "li"), o(214, "span"), d(215, "$20"), s(), s(), o(216, "li"), o(217, "div", 51), o(218, "span", 52), d(219, "-"), s(), f(220, "input", 53), o(221, "span", 54), d(222, "+"), s(), s(), s(), s(), s(), s(), s(), o(223, "div", 59), o(224, "div", 43), o(225, "div", 44), f(226, "img", 60), o(227, "ul"), o(228, "li"), f(229, "i", 46), s(), o(230, "li"), f(231, "i", 46), s(), o(232, "li"), f(233, "i", 46), s(), o(234, "li"), f(235, "i", 46), s(), o(236, "li"), f(237, "i", 46), s(), s(), o(238, "div", 47), o(239, "a", 48), f(240, "i", 49), d(241, " Add to Cart"), s(), s(), s(), o(242, "div", 50), o(243, "h3"), d(244, "Dark Chocolate Cake"), s(), o(245, "ul"), o(246, "li"), o(247, "span"), d(248, "$23"), s(), s(), o(249, "li"), o(250, "div", 51), o(251, "span", 52), d(252, "-"), s(), f(253, "input", 53), o(254, "span", 54), d(255, "+"), s(), s(), s(), s(), s(), s(), s(), o(256, "div", 61), o(257, "div", 43), o(258, "div", 44), f(259, "img", 62), o(260, "ul"), o(261, "li"), f(262, "i", 46), s(), o(263, "li"), f(264, "i", 46), s(), o(265, "li"), f(266, "i", 46), s(), o(267, "li"), f(268, "i", 46), s(), o(269, "li"), f(270, "i", 46), s(), s(), o(271, "div", 47), o(272, "a", 48), f(273, "i", 49), d(274, " Add to Cart"), s(), s(), s(), o(275, "div", 50), o(276, "h3"), d(277, "Sweet Dougnuts"), s(), o(278, "ul"), o(279, "li"), o(280, "span"), d(281, "$35"), s(), s(), o(282, "li"), o(283, "div", 51), o(284, "span", 52), d(285, "-"), s(), f(286, "input", 53), o(287, "span", 54), d(288, "+"), s(), s(), s(), s(), s(), s(), s(), o(289, "div", 63), o(290, "div", 43), o(291, "div", 44), f(292, "img", 64), o(293, "ul"), o(294, "li"), f(295, "i", 46), s(), o(296, "li"), f(297, "i", 46), s(), o(298, "li"), f(299, "i", 46), s(), o(300, "li"), f(301, "i", 46), s(), o(302, "li"), f(303, "i", 46), s(), s(), o(304, "div", 47), o(305, "a", 48), f(306, "i", 49), d(307, " Add to Cart"), s(), s(), s(), o(308, "div", 50), o(309, "h3"), d(310, "Birthday Cake"), s(), o(311, "ul"), o(312, "li"), o(313, "span"), d(314, "$32"), s(), s(), o(315, "li"), o(316, "div", 51), o(317, "span", 52), d(318, "-"), s(), f(319, "input", 53), o(320, "span", 54), d(321, "+"), s(), s(), s(), s(), s(), s(), s(), o(322, "div", 65), o(323, "div", 43), o(324, "div", 44), f(325, "img", 66), o(326, "ul"), o(327, "li"), f(328, "i", 46), s(), o(329, "li"), f(330, "i", 46), s(), o(331, "li"), f(332, "i", 46), s(), o(333, "li"), f(334, "i", 46), s(), o(335, "li"), f(336, "i", 46), s(), s(), o(337, "div", 47), o(338, "a", 48), f(339, "i", 49), d(340, " Add to Cart"), s(), s(), s(), o(341, "div", 50), o(342, "h3"), d(343, "Chocolate Ice Cream"), s(), o(344, "ul"), o(345, "li"), o(346, "span"), d(347, "$28"), s(), s(), o(348, "li"), o(349, "div", 51), o(350, "span", 52), d(351, "-"), s(), f(352, "input", 53), o(353, "span", 54), d(354, "+"), s(), s(), s(), s(), s(), s(), s(), o(355, "div", 67), o(356, "div", 43), o(357, "div", 44), f(358, "img", 68), o(359, "ul"), o(360, "li"), f(361, "i", 46), s(), o(362, "li"), f(363, "i", 46), s(), o(364, "li"), f(365, "i", 46), s(), o(366, "li"), f(367, "i", 46), s(), o(368, "li"), f(369, "i", 46), s(), s(), o(370, "div", 47), o(371, "a", 48), f(372, "i", 49), d(373, " Add to Cart"), s(), s(), s(), o(374, "div", 50), o(375, "h3"), d(376, "Dark Chocolate Cake"), s(), o(377, "ul"), o(378, "li"), o(379, "span"), d(380, "$27"), s(), s(), o(381, "li"), o(382, "div", 51), o(383, "span", 52), d(384, "-"), s(), f(385, "input", 53), o(386, "span", 54), d(387, "+"), s(), s(), s(), s(), s(), s(), s(), s(), o(388, "div", 69), o(389, "a", 70), d(390, "View More Colletction"), s(), s(), s(), s(), o(391, "section", 71), o(392, "div", 5), o(393, "div", 15), o(394, "div", 16), o(395, "div", 72), o(396, "div", 24), o(397, "span", 28), d(398, "Download"), s(), o(399, "h2"), d(400, "Download Our Mobile App That Make You More Easy to Order"), s(), o(401, "p"), d(402, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(403, "ul"), o(404, "li"), o(405, "span"), d(406, "01"), s(), d(407, " Select Your Food"), s(), o(408, "li"), o(409, "span"), d(410, "02"), s(), d(411, " Add to Cart"), s(), o(412, "li"), o(413, "span"), d(414, "03"), s(), d(415, " Order Your Food"), s(), s(), o(416, "div", 73), o(417, "a", 74), f(418, "img", 75), s(), o(419, "a", 74), f(420, "img", 76), s(), s(), s(), s(), o(421, "div", 16), o(422, "div", 77), f(423, "img", 78), s(), s(), s(), s(), s(), o(424, "section", 79), o(425, "div", 80), f(426, "img", 81), s(), o(427, "div", 5), o(428, "div", 15), o(429, "div", 16), o(430, "div", 82), o(431, "div", 24), o(432, "h2"), d(433, "Reservation A Table"), s(), o(434, "p"), d(435, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse."), s(), s(), o(436, "form"), o(437, "ul"), o(438, "li"), f(439, "input", 83), s(), o(440, "li"), f(441, "input", 84), s(), o(442, "li"), o(443, "button", 85), d(444, "Reserve Now"), s(), s(), s(), s(), s(), s(), o(445, "div", 16), o(446, "div", 86), f(447, "img", 87), s(), s(), s(), s(), s(), o(448, "section", 88), o(449, "div", 5), o(450, "div", 24), o(451, "h2"), d(452, "Our Special Chefs"), s(), o(453, "p"), d(454, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(455, "div", 29), o(456, "div", 89), o(457, "div", 90), o(458, "div", 91), f(459, "img", 92), o(460, "div", 93), o(461, "h3"), d(462, "John Doe"), s(), o(463, "span"), d(464, "Head of Chef"), s(), s(), s(), o(465, "div", 94), o(466, "ul"), o(467, "li"), o(468, "a", 95), f(469, "i", 96), s(), s(), o(470, "li"), o(471, "a", 95), f(472, "i", 97), s(), s(), o(473, "li"), o(474, "a", 95), f(475, "i", 98), s(), s(), s(), s(), s(), s(), o(476, "div", 89), o(477, "div", 90), o(478, "div", 91), f(479, "img", 99), o(480, "div", 93), o(481, "h3"), d(482, "John Smith"), s(), o(483, "span"), d(484, "Assistant Chef"), s(), s(), s(), o(485, "div", 94), o(486, "ul"), o(487, "li"), o(488, "a", 95), f(489, "i", 96), s(), s(), o(490, "li"), o(491, "a", 95), f(492, "i", 97), s(), s(), o(493, "li"), o(494, "a", 95), f(495, "i", 98), s(), s(), s(), s(), s(), s(), o(496, "div", 89), o(497, "div", 100), o(498, "div", 91), f(499, "img", 101), o(500, "div", 93), o(501, "h3"), d(502, "Evanaa"), s(), o(503, "span"), d(504, "Intern Chef"), s(), s(), s(), o(505, "div", 94), o(506, "ul"), o(507, "li"), o(508, "a", 95), f(509, "i", 96), s(), s(), o(510, "li"), o(511, "a", 95), f(512, "i", 97), s(), s(), o(513, "li"), o(514, "a", 95), f(515, "i", 98), s(), s(), s(), s(), s(), s(), o(516, "div", 89), o(517, "div", 90), o(518, "div", 91), f(519, "img", 102), o(520, "div", 93), o(521, "h3"), d(522, "Knot Doe"), s(), o(523, "span"), d(524, "Asst. Chef"), s(), s(), s(), o(525, "div", 94), o(526, "ul"), o(527, "li"), o(528, "a", 95), f(529, "i", 96), s(), s(), o(530, "li"), o(531, "a", 95), f(532, "i", 97), s(), s(), o(533, "li"), o(534, "a", 95), f(535, "i", 98), s(), s(), s(), s(), s(), s(), s(), s(), s(), o(536, "div", 103), o(537, "div", 104), f(538, "img", 105), s(), o(539, "div", 5), o(540, "div", 15), o(541, "div", 16), o(542, "div", 106), f(543, "img", 107), s(), s(), o(544, "div", 16), o(545, "div", 108), o(546, "div", 24), o(547, "h2"), d(548, "What People Say About Us"), s(), o(549, "p"), d(550, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(551, "div", 109), o(552, "div", 110), f(553, "img", 111), s(), o(554, "div", 110), f(555, "img", 112), s(), o(556, "div", 110), f(557, "img", 113), s(), o(558, "div", 110), f(559, "img", 114), s(), o(560, "div", 110), f(561, "img", 115), s(), o(562, "div", 110), f(563, "img", 116), s(), s(), o(564, "div", 117), o(565, "div", 110), o(566, "h3"), d(567, "John Doe"), s(), o(568, "p"), d(569, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(570, "div", 110), o(571, "h3"), d(572, "Jac Jackson"), s(), o(573, "p"), d(574, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(575, "div", 110), o(576, "h3"), d(577, "Tom Henry"), s(), o(578, "p"), d(579, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(580, "div", 110), o(581, "h3"), d(582, "John Mic"), s(), o(583, "p"), d(584, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(585, "div", 110), o(586, "h3"), d(587, "Stark Arey"), s(), o(588, "p"), d(589, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(590, "div", 110), o(591, "h3"), d(592, "Stark Arey"), s(), o(593, "p"), d(594, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), s(), s(), s(), s(), s(), s(), o(595, "section", 118), o(596, "div", 5), o(597, "div", 24), o(598, "h2"), d(599, "Our Regular Blogs"), s(), o(600, "p"), d(601, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(602, "div", 29), o(603, "div", 119), o(604, "div", 120), o(605, "div", 121), o(606, "a", 122), f(607, "img", 123), s(), o(608, "span"), d(609, "01 May 2020"), s(), s(), o(610, "div", 124), o(611, "h3"), o(612, "a", 122), d(613, "Brief About How to Make Pasta"), s(), s(), o(614, "p"), d(615, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(616, "a", 125), d(617, "Read More"), s(), s(), s(), s(), o(618, "div", 119), o(619, "div", 120), o(620, "div", 121), o(621, "a", 122), f(622, "img", 126), s(), o(623, "span"), d(624, "02 May 2020"), s(), s(), o(625, "div", 124), o(626, "h3"), o(627, "a", 122), d(628, "Brief About How to Make Pizza"), s(), s(), o(629, "p"), d(630, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(631, "a", 125), d(632, "Read More"), s(), s(), s(), s(), o(633, "div", 127), o(634, "div", 120), o(635, "div", 121), o(636, "a", 122), f(637, "img", 128), s(), o(638, "span"), d(639, "03 May 2020"), s(), s(), o(640, "div", 124), o(641, "h3"), o(642, "a", 122), d(643, "Brief About How to Make Burger"), s(), s(), o(644, "p"), d(645, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(646, "a", 125), d(647, "Read More"), s(), s(), s(), s(), s(), o(648, "div", 129), o(649, "a", 130), d(650, "Read More Blogs"), s(), s(), s(), s(), o(651, "div", 131), o(652, "div", 5), o(653, "div", 29), o(654, "div", 16), o(655, "div", 132), f(656, "img", 133), s(), s(), o(657, "div", 16), o(658, "div", 134), o(659, "div", 24), o(660, "h2"), d(661, "Join As a Delivery Man"), s(), o(662, "p"), d(663, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(664, "a", 135), d(665, "Apply Now"), s(), s(), s(), s(), s(), s(), f(666, "app-footer-style-one"))
                        },
                        directives: [Zb, le, vf],
                        styles: [""]
                    }), e
                })();
            const Se = function () {
                return {
                    exact: !0
                }
            };
            let Ge = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-navbar-style-three"]
                        ],
                        decls: 102,
                        vars: 42,
                        consts: [
                            [1, "navbar-area", "fixed-top"],
                            [1, "mobile-nav"],
                            ["routerLink", "/", 1, "logo"],
                            ["src", "assets/img/logo-two.png", "alt", "Logo"],
                            [1, "main-nav", "main-nav-three"],
                            [1, "container"],
                            [1, "navbar", "navbar-expand-md", "navbar-light"],
                            ["routerLink", "/", 1, "navbar-brand"],
                            ["src", "assets/img/logo.png", "alt", "Logo"],
                            ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"],
                            [1, "navbar-nav"],
                            [1, "nav-item"],
                            ["href", "javascript:void(0)", 1, "nav-link", "dropdown-toggle"],
                            [1, "bx", "bx-chevron-down"],
                            [1, "dropdown-menu"],
                            ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/home-two", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/home-three", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/categories", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/food-collection", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/online-order", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/chefs", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/book-table", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/checkout", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"],
                            [1, "side-nav"],
                            ["routerLink", "/", 1, "nav-cart"],
                            [1, "bx", "bxs-cart"],
                            ["href", "tel:+1123456789", 1, "nav-tel"],
                            [1, "bx", "bxs-phone-call"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "div", 0), o(1, "div", 1), o(2, "a", 2), f(3, "img", 3), s(), s(), o(4, "div", 4), o(5, "div", 5), o(6, "nav", 6), o(7, "a", 7), f(8, "img", 8), s(), o(9, "div", 9), o(10, "ul", 10), o(11, "li", 11), o(12, "a", 12), d(13, "Home "), f(14, "i", 13), s(), o(15, "ul", 14), o(16, "li", 11), o(17, "a", 15), d(18, "Home Page One"), s(), s(), o(19, "li", 11), o(20, "a", 16), d(21, "Home Page Two"), s(), s(), o(22, "li", 11), o(23, "a", 17), d(24, "Home Page Three"), s(), s(), s(), s(), o(25, "li", 11), o(26, "a", 18), d(27, "About"), s(), s(), o(28, "li", 11), o(29, "a", 19), d(30, "Categories"), s(), s(), o(31, "li", 11), o(32, "a", 12), d(33, "Services "), f(34, "i", 13), s(), o(35, "ul", 14), o(36, "li", 11), o(37, "a", 20), d(38, "Services"), s(), s(), o(39, "li", 11), o(40, "a", 21), d(41, "Services Details"), s(), s(), s(), s(), o(42, "li", 11), o(43, "a", 12), d(44, "Blog "), f(45, "i", 13), s(), o(46, "ul", 14), o(47, "li", 11), o(48, "a", 22), d(49, "Blog"), s(), s(), o(50, "li", 11), o(51, "a", 23), d(52, "Blog Details"), s(), s(), s(), s(), o(53, "li", 11), o(54, "a", 12), d(55, "Pages "), f(56, "i", 13), s(), o(57, "ul", 14), o(58, "li", 11), o(59, "a", 24), d(60, "Food Collection"), s(), s(), o(61, "li", 11), o(62, "a", 25), d(63, "Online Order"), s(), s(), o(64, "li", 11), o(65, "a", 26), d(66, "Chefs"), s(), s(), o(67, "li", 11), o(68, "a", 27), d(69, "Book A Table"), s(), s(), o(70, "li", 11), o(71, "a", 28), d(72, "Cart"), s(), s(), o(73, "li", 11), o(74, "a", 29), d(75, "Checkout"), s(), s(), o(76, "li", 11), o(77, "a", 30), d(78, "Coming Soon"), s(), s(), o(79, "li", 11), o(80, "a", 31), d(81, "FAQ"), s(), s(), o(82, "li", 11), o(83, "a", 32), d(84, "Terms & Conditions"), s(), s(), o(85, "li", 11), o(86, "a", 33), d(87, "Privacy Policy"), s(), s(), o(88, "li", 11), o(89, "a", 34), d(90, "404 Error"), s(), s(), s(), s(), o(91, "li", 11), o(92, "a", 35), d(93, "Contact"), s(), s(), s(), o(94, "div", 36), o(95, "a", 37), f(96, "i", 38), o(97, "span"), d(98, "1"), s(), s(), o(99, "a", 39), f(100, "i", 40), d(101, " +1 123 456 789"), s(), s(), s(), s(), s(), s(), s()), 2 & n && (S(17), x("routerLinkActiveOptions", T(21, Se)), S(3), x("routerLinkActiveOptions", T(22, Se)), S(3), x("routerLinkActiveOptions", T(23, Se)), S(3), x("routerLinkActiveOptions", T(24, Se)), S(3), x("routerLinkActiveOptions", T(25, Se)), S(8), x("routerLinkActiveOptions", T(26, Se)), S(3), x("routerLinkActiveOptions", T(27, Se)), S(8), x("routerLinkActiveOptions", T(28, Se)), S(3), x("routerLinkActiveOptions", T(29, Se)), S(8), x("routerLinkActiveOptions", T(30, Se)), S(3), x("routerLinkActiveOptions", T(31, Se)), S(3), x("routerLinkActiveOptions", T(32, Se)), S(3), x("routerLinkActiveOptions", T(33, Se)), S(3), x("routerLinkActiveOptions", T(34, Se)), S(3), x("routerLinkActiveOptions", T(35, Se)), S(3), x("routerLinkActiveOptions", T(36, Se)), S(3), x("routerLinkActiveOptions", T(37, Se)), S(3), x("routerLinkActiveOptions", T(38, Se)), S(3), x("routerLinkActiveOptions", T(39, Se)), S(3), x("routerLinkActiveOptions", T(40, Se)), S(3), x("routerLinkActiveOptions", T(41, Se)))
                        },
                        directives: [le, fl],
                        styles: [""]
                    }), e
                })(),
                WM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-about"]
                        ],
                        decls: 183,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "story-area", "pt-100", "pb-70"],
                            [1, "story-shape"],
                            ["src", "assets/img/about/story3.png", "alt", "Shape"],
                            [1, "story-head"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-6"],
                            [1, "story-item"],
                            ["src", "assets/img/about/story1.jpg", "alt", "Story"],
                            ["src", "assets/img/about/story2.jpg", "alt", "Story"],
                            [1, "services-area", "ptb-100"],
                            [1, "section-title"],
                            [1, "services-slider", "owl-theme", "owl-carousel"],
                            [1, "services-item"],
                            ["routerLink", "/services-details"],
                            ["src", "assets/img/home-one/services1.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "services-image", 1, "service-shape"],
                            ["src", "assets/img/home-one/services2.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services3.png", "alt", "services-image"],
                            [1, "download-area-two", "pt-100", "pb-70"],
                            [1, "download-shape"],
                            ["src", "assets/img/home-one/reservation-shape.png", "alt", "Download"],
                            ["src", "assets/img/about/download2.png", "alt", "Download"],
                            [1, "col-lg-6"],
                            [1, "download-item"],
                            ["href", "#"],
                            ["src", "assets/img/home-two/google-store.png", "alt", "Google"],
                            ["src", "assets/img/about/app.png", "alt", "App"],
                            [1, "download-img"],
                            ["src", "assets/img/home-one/subscribe-main.png", "alt", "Download"],
                            [1, "chef-area", "chef-area-two", "pb-70"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "chef-item"],
                            [1, "chef-top"],
                            ["src", "assets/img/home-one/chef/1.jpg", "alt", "Chef"],
                            [1, "chef-inner"],
                            [1, "chef-bottom"],
                            ["target", "_blank", "href", "#"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            ["src", "assets/img/home-one/chef/6.jpg", "alt", "Chef"],
                            [1, "chef-item", "active"],
                            ["src", "assets/img/home-one/chef/3.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/7.jpg", "alt", "Chef"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "About Us"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "About Us"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 6), f(16, "img", 7), s(), o(17, "div", 1), o(18, "div", 8), o(19, "h2"), d(20, "About Our Story"), s(), o(21, "p"), d(22, "A restaurant sometimes known as a diner is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal. Some restaurants are a chain, meaning that there are restaurants which have the same name and serve is also a place where people go to enjoy the time and to eat a meal the same food."), s(), s(), o(23, "div", 9), o(24, "div", 10), o(25, "div", 11), f(26, "img", 12), o(27, "h3"), d(28, "Restaurant Service"), s(), s(), s(), o(29, "div", 10), o(30, "div", 11), f(31, "img", 13), o(32, "h3"), d(33, "Home Delivery Service"), s(), s(), s(), s(), s(), s(), o(34, "section", 14), o(35, "div", 1), o(36, "div", 15), o(37, "h2"), d(38, "What Spiz Services"), s(), o(39, "p"), d(40, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(41, "div", 16), o(42, "div", 17), o(43, "a", 18), f(44, "img", 19), f(45, "img", 20), o(46, "h3"), d(47, "Fresh Healthy Food"), s(), o(48, "p"), d(49, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(50, "div", 17), o(51, "a", 18), f(52, "img", 21), f(53, "img", 20), o(54, "h3"), d(55, "Free Fast Home Delivery"), s(), o(56, "p"), d(57, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(58, "div", 17), o(59, "a", 18), f(60, "img", 22), f(61, "img", 20), o(62, "h3"), d(63, "Discount Voucher"), s(), o(64, "p"), d(65, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(66, "div", 17), o(67, "a", 18), f(68, "img", 22), f(69, "img", 20), o(70, "h3"), d(71, "Discount Voucher"), s(), o(72, "p"), d(73, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), s(), s(), o(74, "section", 23), o(75, "div", 24), f(76, "img", 25), f(77, "img", 26), s(), o(78, "div", 1), o(79, "div", 9), o(80, "div", 27), o(81, "div", 28), o(82, "h2"), d(83, "Download Our Mobile App That Make You More Easy to Order"), s(), o(84, "ul"), o(85, "li"), o(86, "a", 29), f(87, "img", 30), s(), s(), o(88, "li"), o(89, "a", 29), f(90, "img", 31), s(), s(), s(), s(), s(), o(91, "div", 27), o(92, "div", 32), f(93, "img", 33), s(), s(), s(), s(), s(), o(94, "section", 34), o(95, "div", 1), o(96, "div", 15), o(97, "h2"), d(98, "Our Special Chefs"), s(), o(99, "p"), d(100, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(101, "div", 9), o(102, "div", 35), o(103, "div", 36), o(104, "div", 37), f(105, "img", 38), o(106, "div", 39), o(107, "h3"), d(108, "John Doe"), s(), o(109, "span"), d(110, "Head of Chef"), s(), s(), s(), o(111, "div", 40), o(112, "ul"), o(113, "li"), o(114, "a", 41), f(115, "i", 42), s(), s(), o(116, "li"), o(117, "a", 41), f(118, "i", 43), s(), s(), o(119, "li"), o(120, "a", 41), f(121, "i", 44), s(), s(), s(), s(), s(), s(), o(122, "div", 35), o(123, "div", 36), o(124, "div", 37), f(125, "img", 45), o(126, "div", 39), o(127, "h3"), d(128, "John Smith"), s(), o(129, "span"), d(130, "Assistant Chef"), s(), s(), s(), o(131, "div", 40), o(132, "ul"), o(133, "li"), o(134, "a", 41), f(135, "i", 42), s(), s(), o(136, "li"), o(137, "a", 41), f(138, "i", 43), s(), s(), o(139, "li"), o(140, "a", 41), f(141, "i", 44), s(), s(), s(), s(), s(), s(), o(142, "div", 35), o(143, "div", 46), o(144, "div", 37), f(145, "img", 47), o(146, "div", 39), o(147, "h3"), d(148, "Evanaa"), s(), o(149, "span"), d(150, "Intern Chef"), s(), s(), s(), o(151, "div", 40), o(152, "ul"), o(153, "li"), o(154, "a", 41), f(155, "i", 42), s(), s(), o(156, "li"), o(157, "a", 41), f(158, "i", 43), s(), s(), o(159, "li"), o(160, "a", 41), f(161, "i", 44), s(), s(), s(), s(), s(), s(), o(162, "div", 35), o(163, "div", 36), o(164, "div", 37), f(165, "img", 48), o(166, "div", 39), o(167, "h3"), d(168, "Knot Doe"), s(), o(169, "span"), d(170, "Asst. Chef"), s(), s(), s(), o(171, "div", 40), o(172, "ul"), o(173, "li"), o(174, "a", 41), f(175, "i", 42), s(), s(), o(176, "li"), o(177, "a", 41), f(178, "i", 43), s(), s(), o(179, "li"), o(180, "a", 41), f(181, "i", 44), s(), s(), s(), s(), s(), s(), s(), s(), s(), f(182, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                zM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-categories"]
                        ],
                        decls: 96,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "feature-area", "pt-100", "pb-70"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "feature-item"],
                            ["src", "assets/img/home-one/feature1.jpg", "alt", "Feature"],
                            [1, "feature-inner"],
                            ["src", "assets/img/home-one/feature1.png", "alt", "Feature"],
                            [1, "bx", "bx-right-arrow-alt"],
                            ["src", "assets/img/home-one/feature2.jpg", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature2.png", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature3.jpg", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature3.png", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature4.jpg", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature5.jpg", "alt", "Feature"],
                            ["src", "assets/img/home-one/feature6.jpg", "alt", "Feature"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Categories"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Categories"), s(), s(), s(), s(), s(), o(14, "div", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), f(19, "img", 9), o(20, "div", 10), o(21, "ul"), o(22, "li"), f(23, "img", 11), s(), o(24, "li"), o(25, "span"), d(26, "Fast Food"), s(), s(), o(27, "li"), o(28, "a", 3), f(29, "i", 12), s(), s(), s(), s(), s(), s(), o(30, "div", 7), o(31, "div", 8), f(32, "img", 13), o(33, "div", 10), o(34, "ul"), o(35, "li"), f(36, "img", 14), s(), o(37, "li"), o(38, "span"), d(39, "Hot Platter"), s(), s(), o(40, "li"), o(41, "a", 3), f(42, "i", 12), s(), s(), s(), s(), s(), s(), o(43, "div", 7), o(44, "div", 8), f(45, "img", 15), o(46, "div", 10), o(47, "ul"), o(48, "li"), f(49, "img", 16), s(), o(50, "li"), o(51, "span"), d(52, "Dessert"), s(), s(), o(53, "li"), o(54, "a", 3), f(55, "i", 12), s(), s(), s(), s(), s(), s(), o(56, "div", 7), o(57, "div", 8), f(58, "img", 17), o(59, "div", 10), o(60, "ul"), o(61, "li"), f(62, "img", 16), s(), o(63, "li"), o(64, "span"), d(65, "Asian Food"), s(), s(), o(66, "li"), o(67, "a", 3), f(68, "i", 12), s(), s(), s(), s(), s(), s(), o(69, "div", 7), o(70, "div", 8), f(71, "img", 18), o(72, "div", 10), o(73, "ul"), o(74, "li"), f(75, "img", 16), s(), o(76, "li"), o(77, "span"), d(78, "Desi Food"), s(), s(), o(79, "li"), o(80, "a", 3), f(81, "i", 12), s(), s(), s(), s(), s(), s(), o(82, "div", 7), o(83, "div", 8), f(84, "img", 19), o(85, "div", 10), o(86, "ul"), o(87, "li"), f(88, "img", 16), s(), o(89, "li"), o(90, "span"), d(91, "Chinese Food"), s(), s(), o(92, "li"), o(93, "a", 3), f(94, "i", 12), s(), s(), s(), s(), s(), s(), s(), s(), s(), f(95, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                GM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-services"]
                        ],
                        decls: 72,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "services-area", "services-area-four", "pt-100", "pb-70"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "services-item"],
                            ["routerLink", "/services-details"],
                            ["src", "assets/img/home-one/services1.png", "alt", "Service"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "Service", 1, "service-shape"],
                            ["src", "assets/img/home-one/services2.png", "alt", "Service"],
                            ["src", "assets/img/home-one/services3.png", "alt", "Service"],
                            ["src", "assets/img/home-one/services4.png", "alt", "Service"],
                            ["src", "assets/img/home-one/services5.png", "alt", "Service"],
                            ["src", "assets/img/home-one/services6.png", "alt", "Service"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Services"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Services"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), o(19, "a", 9), f(20, "img", 10), f(21, "img", 11), o(22, "h3"), d(23, "Fresh Healthy Food"), s(), o(24, "p"), d(25, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), o(26, "div", 7), o(27, "div", 8), o(28, "a", 9), f(29, "img", 12), f(30, "img", 11), o(31, "h3"), d(32, "Free Fast Home Delivery"), s(), o(33, "p"), d(34, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), o(35, "div", 7), o(36, "div", 8), o(37, "a", 9), f(38, "img", 13), f(39, "img", 11), o(40, "h3"), d(41, "Discount Voucher"), s(), o(42, "p"), d(43, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), o(44, "div", 7), o(45, "div", 8), o(46, "a", 9), f(47, "img", 14), f(48, "img", 11), o(49, "h3"), d(50, "On Time Service"), s(), o(51, "p"), d(52, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), o(53, "div", 7), o(54, "div", 8), o(55, "a", 9), f(56, "img", 15), f(57, "img", 11), o(58, "h3"), d(59, "Vat Free"), s(), o(60, "p"), d(61, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), o(62, "div", 7), o(63, "div", 8), o(64, "a", 9), f(65, "img", 16), f(66, "img", 11), o(67, "h3"), d(68, "Qualityful Food"), s(), o(69, "p"), d(70, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), s(), s(), s(), f(71, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                QM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-services-details"]
                        ],
                        decls: 190,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-area-two"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-lg-5"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "col-lg-7"],
                            [1, "page-title-plate"],
                            ["src", "assets/img/services-details/food1.png", "alt", "Plate"],
                            ["src", "assets/img/services-details/food2.png", "alt", "Plate"],
                            ["src", "assets/img/services-details/food3.png", "alt", "Plate"],
                            ["src", "assets/img/services-details/food4.png", "alt", "Plate"],
                            [1, "services-details-area", "pt-100", "pb-70"],
                            [1, "col-lg-3"],
                            [1, "services-details-item"],
                            [1, "services-details-more"],
                            ["routerLink", "/services-details"],
                            [1, "bx", "bx-plus"],
                            [1, "services-details-order"],
                            ["src", "assets/img/services-details/order.png", "alt", "Service"],
                            [1, "offer-off"],
                            [1, "col-lg-9"],
                            [1, "services-details-fresh"],
                            ["src", "assets/img/services-details/2.jpg", "alt", "Service"],
                            [1, "services-details-p"],
                            ["routerLink", "/contact", 1, "cmn-btn"],
                            [1, "download-area-two", "pt-100", "pb-70"],
                            [1, "download-shape"],
                            ["src", "assets/img/home-one/reservation-shape.png", "alt", "Download"],
                            ["src", "assets/img/about/download2.png", "alt", "Download"],
                            [1, "col-lg-6"],
                            [1, "download-item"],
                            ["href", "#"],
                            ["src", "assets/img/home-two/google-store.png", "alt", "Google"],
                            ["src", "assets/img/about/app.png", "alt", "App"],
                            [1, "download-img"],
                            ["src", "assets/img/home-one/subscribe-main.png", "alt", "Download"],
                            [1, "chef-area", "chef-area-two", "pb-70"],
                            [1, "section-title"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "chef-item"],
                            [1, "chef-top"],
                            ["src", "assets/img/home-one/chef/1.jpg", "alt", "Chef"],
                            [1, "chef-inner"],
                            [1, "chef-bottom"],
                            ["target", "_blank", "href", "#"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            ["src", "assets/img/home-one/chef/6.jpg", "alt", "Chef"],
                            [1, "chef-item", "active"],
                            ["src", "assets/img/home-one/chef/3.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/7.jpg", "alt", "Chef"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "div", 3), o(5, "div", 4), o(6, "h2"), d(7, "Services Details"), s(), o(8, "ul"), o(9, "li"), o(10, "a", 5), d(11, "Home"), s(), s(), o(12, "li"), f(13, "i", 6), s(), o(14, "li"), d(15, "Services Details"), s(), s(), s(), s(), o(16, "div", 7), o(17, "div", 8), o(18, "ul"), o(19, "li"), f(20, "img", 9), s(), o(21, "li"), f(22, "img", 10), s(), o(23, "li"), f(24, "img", 11), s(), o(25, "li"), f(26, "img", 12), s(), s(), s(), s(), s(), s(), s(), o(27, "div", 13), o(28, "div", 1), o(29, "div", 2), o(30, "div", 14), o(31, "div", 15), o(32, "div", 16), o(33, "h3"), d(34, "More Services"), s(), o(35, "ul"), o(36, "li"), o(37, "a", 17), d(38, "Quality Service "), f(39, "i", 18), s(), s(), o(40, "li"), o(41, "a", 17), d(42, "Free Home Delivery "), f(43, "i", 18), s(), s(), o(44, "li"), o(45, "a", 17), d(46, "Discount Voucher "), f(47, "i", 18), s(), s(), o(48, "li"), o(49, "a", 17), d(50, "Party Center "), f(51, "i", 18), s(), s(), o(52, "li"), o(53, "a", 17), d(54, "Conference Convention "), f(55, "i", 18), s(), s(), s(), s(), o(56, "div", 19), o(57, "h3"), d(58, "Order Your Food Now"), s(), o(59, "span"), d(60, "09:00am - 12:00am"), s(), f(61, "img", 20), o(62, "div", 21), o(63, "span"), d(64, "20%"), s(), o(65, "span"), d(66, "OFF"), s(), s(), s(), s(), s(), o(67, "div", 22), o(68, "div", 15), o(69, "div", 23), o(70, "h2"), d(71, "Fresh Food Services"), s(), o(72, "p"), d(73, "Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits, this means that they have been recently harvested and treated properly postharvest; for meat, it has recently been slaughtered and butchered; for fish."), s(), f(74, "img", 24), o(75, "p"), d(76, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions."), s(), o(77, "p", 25), d(78, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."), s(), o(79, "a", 26), d(80, "Reservation"), s(), s(), s(), s(), s(), s(), s(), o(81, "section", 27), o(82, "div", 28), f(83, "img", 29), f(84, "img", 30), s(), o(85, "div", 1), o(86, "div", 2), o(87, "div", 31), o(88, "div", 32), o(89, "h2"), d(90, "Download Our Mobile App That Make You More Easy to Order"), s(), o(91, "ul"), o(92, "li"), o(93, "a", 33), f(94, "img", 34), s(), s(), o(95, "li"), o(96, "a", 33), f(97, "img", 35), s(), s(), s(), s(), s(), o(98, "div", 31), o(99, "div", 36), f(100, "img", 37), s(), s(), s(), s(), s(), o(101, "section", 38), o(102, "div", 1), o(103, "div", 39), o(104, "h2"), d(105, "Our Special Chefs"), s(), o(106, "p"), d(107, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(108, "div", 2), o(109, "div", 40), o(110, "div", 41), o(111, "div", 42), f(112, "img", 43), o(113, "div", 44), o(114, "h3"), d(115, "John Doe"), s(), o(116, "span"), d(117, "Head of Chef"), s(), s(), s(), o(118, "div", 45), o(119, "ul"), o(120, "li"), o(121, "a", 46), f(122, "i", 47), s(), s(), o(123, "li"), o(124, "a", 46), f(125, "i", 48), s(), s(), o(126, "li"), o(127, "a", 46), f(128, "i", 49), s(), s(), s(), s(), s(), s(), o(129, "div", 40), o(130, "div", 41), o(131, "div", 42), f(132, "img", 50), o(133, "div", 44), o(134, "h3"), d(135, "John Smith"), s(), o(136, "span"), d(137, "Assistant Chef"), s(), s(), s(), o(138, "div", 45), o(139, "ul"), o(140, "li"), o(141, "a", 46), f(142, "i", 47), s(), s(), o(143, "li"), o(144, "a", 46), f(145, "i", 48), s(), s(), o(146, "li"), o(147, "a", 46), f(148, "i", 49), s(), s(), s(), s(), s(), s(), o(149, "div", 40), o(150, "div", 51), o(151, "div", 42), f(152, "img", 52), o(153, "div", 44), o(154, "h3"), d(155, "Evanaa"), s(), o(156, "span"), d(157, "Intern Chef"), s(), s(), s(), o(158, "div", 45), o(159, "ul"), o(160, "li"), o(161, "a", 46), f(162, "i", 47), s(), s(), o(163, "li"), o(164, "a", 46), f(165, "i", 48), s(), s(), o(166, "li"), o(167, "a", 46), f(168, "i", 49), s(), s(), s(), s(), s(), s(), o(169, "div", 40), o(170, "div", 41), o(171, "div", 42), f(172, "img", 53), o(173, "div", 44), o(174, "h3"), d(175, "Knot Doe"), s(), o(176, "span"), d(177, "Asst. Chef"), s(), s(), s(), o(178, "div", 45), o(179, "ul"), o(180, "li"), o(181, "a", 46), f(182, "i", 47), s(), s(), o(183, "li"), o(184, "a", 46), f(185, "i", 48), s(), s(), o(186, "li"), o(187, "a", 46), f(188, "i", 49), s(), s(), s(), s(), s(), s(), s(), s(), s(), f(189, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                YM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-blog"]
                        ],
                        decls: 108,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "blog-area", "pt-100", "pb-70"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "blog-item"],
                            [1, "blog-top"],
                            ["routerLink", "/blog-details"],
                            ["src", "assets/img/home-one/blog1.jpg", "alt", "Blog"],
                            [1, "blog-bottom"],
                            ["routerLink", "/blog-details", 1, "cmn-btn"],
                            ["src", "assets/img/home-one/blog2.jpg", "alt", "Blog"],
                            ["src", "assets/img/home-one/blog3.jpg", "alt", "Blog"],
                            ["src", "assets/img/home-one/blog4.jpg", "alt", "Blog"],
                            ["src", "assets/img/home-one/blog5.jpg", "alt", "Blog"],
                            ["src", "assets/img/home-one/blog6.jpg", "alt", "Blog"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Blog"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Blog"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), o(19, "div", 9), o(20, "a", 10), f(21, "img", 11), s(), o(22, "span"), d(23, "01 May 2020"), s(), s(), o(24, "div", 12), o(25, "h3"), o(26, "a", 10), d(27, "Brief About How to Make Pasta"), s(), s(), o(28, "p"), d(29, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(30, "a", 13), d(31, "Read More"), s(), s(), s(), s(), o(32, "div", 7), o(33, "div", 8), o(34, "div", 9), o(35, "a", 10), f(36, "img", 14), s(), o(37, "span"), d(38, "02 May 2020"), s(), s(), o(39, "div", 12), o(40, "h3"), o(41, "a", 10), d(42, "Brief About How to Make Pizza"), s(), s(), o(43, "p"), d(44, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(45, "a", 13), d(46, "Read More"), s(), s(), s(), s(), o(47, "div", 7), o(48, "div", 8), o(49, "div", 9), o(50, "a", 10), f(51, "img", 15), s(), o(52, "span"), d(53, "03 May 2020"), s(), s(), o(54, "div", 12), o(55, "h3"), o(56, "a", 10), d(57, "Brief About How to Make Burger"), s(), s(), o(58, "p"), d(59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(60, "a", 13), d(61, "Read More"), s(), s(), s(), s(), o(62, "div", 7), o(63, "div", 8), o(64, "div", 9), o(65, "a", 10), f(66, "img", 16), s(), o(67, "span"), d(68, "03 May 2020"), s(), s(), o(69, "div", 12), o(70, "h3"), o(71, "a", 10), d(72, "Brief About How to Make Sandwich"), s(), s(), o(73, "p"), d(74, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(75, "a", 13), d(76, "Read More"), s(), s(), s(), s(), o(77, "div", 7), o(78, "div", 8), o(79, "div", 9), o(80, "a", 10), f(81, "img", 17), s(), o(82, "span"), d(83, "03 May 2020"), s(), s(), o(84, "div", 12), o(85, "h3"), o(86, "a", 10), d(87, "Brief About How to Make Coffee"), s(), s(), o(88, "p"), d(89, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(90, "a", 13), d(91, "Read More"), s(), s(), s(), s(), o(92, "div", 7), o(93, "div", 8), o(94, "div", 9), o(95, "a", 10), f(96, "img", 18), s(), o(97, "span"), d(98, "03 May 2020"), s(), s(), o(99, "div", 12), o(100, "h3"), o(101, "a", 10), d(102, "Brief About How to Make Tea"), s(), s(), o(103, "p"), d(104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"), s(), o(105, "a", 13), d(106, "Read More"), s(), s(), s(), s(), s(), s(), s(), f(107, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                KM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-blog-details"]
                        ],
                        decls: 91,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-two"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "services-details-area", "pt-100", "pb-70"],
                            [1, "row"],
                            [1, "col-lg-3"],
                            [1, "services-details-item"],
                            [1, "services-details-more", "blog-details-more"],
                            ["routerLink", "/blog-details"],
                            [1, "bx", "bx-plus"],
                            ["routerLink", "/blog"],
                            [1, "blog-details-tags"],
                            [1, "col-lg-9"],
                            [1, "services-details-fresh"],
                            ["src", "assets/img/blog-details/2.jpg", "alt", "Blog"],
                            [1, "service-details-p"],
                            [1, "blog-details-nav"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Blog Details"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Blog Details"), s(), s(), s(), s(), s(), o(14, "div", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), o(19, "div", 9), o(20, "h3"), d(21, "Recent Post"), s(), o(22, "ul"), o(23, "li"), o(24, "a", 10), d(25, "How to Make Egg Nod... "), f(26, "i", 11), s(), s(), o(27, "li"), o(28, "a", 10), d(29, "Be A Chef "), f(30, "i", 11), s(), s(), o(31, "li"), o(32, "a", 10), d(33, "Cooking Master "), f(34, "i", 11), s(), s(), s(), s(), o(35, "div", 9), o(36, "h3"), d(37, "Categories"), s(), o(38, "ul"), o(39, "li"), o(40, "a", 12), d(41, "Cooking "), f(42, "i", 11), s(), s(), o(43, "li"), o(44, "a", 12), d(45, "Street Food "), f(46, "i", 11), s(), s(), o(47, "li"), o(48, "a", 12), d(49, "Fast Food "), f(50, "i", 11), s(), s(), s(), s(), o(51, "div", 13), o(52, "h3"), d(53, "Tags"), s(), o(54, "ul"), o(55, "li"), o(56, "a", 12), d(57, "Pasta"), s(), s(), o(58, "li"), o(59, "a", 12), d(60, "Home Made"), s(), s(), o(61, "li"), o(62, "a", 12), d(63, "Food"), s(), s(), o(64, "li"), o(65, "a", 12), d(66, "Street"), s(), s(), o(67, "li"), o(68, "a", 12), d(69, "Yammy Food"), s(), s(), s(), s(), s(), s(), o(70, "div", 14), o(71, "div", 8), o(72, "div", 15), o(73, "h2"), d(74, "How to Make Pasta"), s(), o(75, "p"), d(76, "Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits, this means that they have been recently harvested and treated properly postharvest; for meat, it has recently been slaughtered and butchered; for fish."), s(), f(77, "img", 16), o(78, "p"), d(79, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions."), s(), o(80, "p", 17), d(81, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."), s(), o(82, "div", 18), o(83, "ul"), o(84, "li"), o(85, "a", 10), d(86, "Previous"), s(), s(), o(87, "li"), o(88, "a", 10), d(89, "Next"), s(), s(), s(), s(), s(), s(), s(), s(), s(), s(), f(90, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                ZM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-food-collection"]
                        ],
                        decls: 299,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "collection-area", "collection-area-two", "pt-100", "pb-70"],
                            [1, "section-title"],
                            [1, "sorting-menu"],
                            ["data-filter", "all", 1, "filter", "active"],
                            ["data-filter", ".web", 1, "filter"],
                            ["data-filter", ".ui", 1, "filter"],
                            ["data-filter", ".ux", 1, "filter"],
                            ["data-filter", ".branding", 1, "filter"],
                            ["id", "Container", 1, "row"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "ui"],
                            [1, "collection-item"],
                            [1, "collection-top"],
                            ["src", "assets/img/home-one/collection/1.jpg", "alt", "Collection"],
                            [1, "bx", "bxs-star", "checked"],
                            [1, "add-cart"],
                            ["routerLink", "/cart"],
                            [1, "bx", "bxs-cart"],
                            [1, "collection-bottom"],
                            [1, "number"],
                            [1, "minus"],
                            ["type", "text", "value", "1", 1, "form-control"],
                            [1, "plus"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui"],
                            ["src", "assets/img/home-one/collection/2.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "ui"],
                            ["src", "assets/img/home-one/collection/3.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "web"],
                            ["src", "assets/img/home-one/collection/4.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "web", "branding"],
                            ["src", "assets/img/home-one/collection/5.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ui", "web"],
                            ["src", "assets/img/home-one/collection/6.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "ux", "branding"],
                            ["src", "assets/img/home-one/collection/7.jpg", "alt", "Collection"],
                            [1, "col-sm-6", "col-lg-3", "mix", "branding", "ui"],
                            ["src", "assets/img/home-one/collection/8.jpg", "alt", "Collection"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Food Collection"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Food Collection"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "h2"), d(18, "Our Regular Food Collections"), s(), o(19, "p"), d(20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), s(), s(), o(21, "div", 7), o(22, "ul"), o(23, "li", 8), d(24, "All"), s(), o(25, "li", 9), d(26, "Fast Food"), s(), o(27, "li", 10), d(28, "Platters"), s(), o(29, "li", 11), d(30, "Dessert"), s(), o(31, "li", 12), d(32, "Asian Food"), s(), s(), s(), o(33, "div", 13), o(34, "div", 14), o(35, "div", 15), o(36, "div", 16), f(37, "img", 17), o(38, "ul"), o(39, "li"), f(40, "i", 18), s(), o(41, "li"), f(42, "i", 18), s(), o(43, "li"), f(44, "i", 18), s(), o(45, "li"), f(46, "i", 18), s(), o(47, "li"), f(48, "i", 18), s(), s(), o(49, "div", 19), o(50, "a", 20), f(51, "i", 21), d(52, " Add to Cart"), s(), s(), s(), o(53, "div", 22), o(54, "h3"), d(55, "Dark Chocolate Cake"), s(), o(56, "ul"), o(57, "li"), o(58, "span"), d(59, "$25"), s(), s(), o(60, "li"), o(61, "div", 23), o(62, "span", 24), d(63, "-"), s(), f(64, "input", 25), o(65, "span", 26), d(66, "+"), s(), s(), s(), s(), s(), s(), s(), o(67, "div", 27), o(68, "div", 15), o(69, "div", 16), f(70, "img", 28), o(71, "ul"), o(72, "li"), f(73, "i", 18), s(), o(74, "li"), f(75, "i", 18), s(), o(76, "li"), f(77, "i", 18), s(), o(78, "li"), f(79, "i", 18), s(), o(80, "li"), f(81, "i", 18), s(), s(), o(82, "div", 19), o(83, "a", 20), f(84, "i", 21), d(85, " Add to Cart"), s(), s(), s(), o(86, "div", 22), o(87, "h3"), d(88, "Cake with Drinks"), s(), o(89, "ul"), o(90, "li"), o(91, "span"), d(92, "$15"), s(), s(), o(93, "li"), o(94, "div", 23), o(95, "span", 24), d(96, "-"), s(), f(97, "input", 25), o(98, "span", 26), d(99, "+"), s(), s(), s(), s(), s(), s(), s(), o(100, "div", 29), o(101, "div", 15), o(102, "div", 16), f(103, "img", 30), o(104, "ul"), o(105, "li"), f(106, "i", 18), s(), o(107, "li"), f(108, "i", 18), s(), o(109, "li"), f(110, "i", 18), s(), o(111, "li"), f(112, "i", 18), s(), o(113, "li"), f(114, "i", 18), s(), s(), o(115, "div", 19), o(116, "a", 20), f(117, "i", 21), d(118, " Add to Cart"), s(), s(), s(), o(119, "div", 22), o(120, "h3"), d(121, "Doughnut Chocolate"), s(), o(122, "ul"), o(123, "li"), o(124, "span"), d(125, "$20"), s(), s(), o(126, "li"), o(127, "div", 23), o(128, "span", 24), d(129, "-"), s(), f(130, "input", 25), o(131, "span", 26), d(132, "+"), s(), s(), s(), s(), s(), s(), s(), o(133, "div", 31), o(134, "div", 15), o(135, "div", 16), f(136, "img", 32), o(137, "ul"), o(138, "li"), f(139, "i", 18), s(), o(140, "li"), f(141, "i", 18), s(), o(142, "li"), f(143, "i", 18), s(), o(144, "li"), f(145, "i", 18), s(), o(146, "li"), f(147, "i", 18), s(), s(), o(148, "div", 19), o(149, "a", 20), f(150, "i", 21), d(151, " Add to Cart"), s(), s(), s(), o(152, "div", 22), o(153, "h3"), d(154, "Dark Chocolate Cake"), s(), o(155, "ul"), o(156, "li"), o(157, "span"), d(158, "$23"), s(), s(), o(159, "li"), o(160, "div", 23), o(161, "span", 24), d(162, "-"), s(), f(163, "input", 25), o(164, "span", 26), d(165, "+"), s(), s(), s(), s(), s(), s(), s(), o(166, "div", 33), o(167, "div", 15), o(168, "div", 16), f(169, "img", 34), o(170, "ul"), o(171, "li"), f(172, "i", 18), s(), o(173, "li"), f(174, "i", 18), s(), o(175, "li"), f(176, "i", 18), s(), o(177, "li"), f(178, "i", 18), s(), o(179, "li"), f(180, "i", 18), s(), s(), o(181, "div", 19), o(182, "a", 20), f(183, "i", 21), d(184, " Add to Cart"), s(), s(), s(), o(185, "div", 22), o(186, "h3"), d(187, "Sweet Dougnuts"), s(), o(188, "ul"), o(189, "li"), o(190, "span"), d(191, "$35"), s(), s(), o(192, "li"), o(193, "div", 23), o(194, "span", 24), d(195, "-"), s(), f(196, "input", 25), o(197, "span", 26), d(198, "+"), s(), s(), s(), s(), s(), s(), s(), o(199, "div", 35), o(200, "div", 15), o(201, "div", 16), f(202, "img", 36), o(203, "ul"), o(204, "li"), f(205, "i", 18), s(), o(206, "li"), f(207, "i", 18), s(), o(208, "li"), f(209, "i", 18), s(), o(210, "li"), f(211, "i", 18), s(), o(212, "li"), f(213, "i", 18), s(), s(), o(214, "div", 19), o(215, "a", 20), f(216, "i", 21), d(217, " Add to Cart"), s(), s(), s(), o(218, "div", 22), o(219, "h3"), d(220, "Birthday Cake"), s(), o(221, "ul"), o(222, "li"), o(223, "span"), d(224, "$32"), s(), s(), o(225, "li"), o(226, "div", 23), o(227, "span", 24), d(228, "-"), s(), f(229, "input", 25), o(230, "span", 26), d(231, "+"), s(), s(), s(), s(), s(), s(), s(), o(232, "div", 37), o(233, "div", 15), o(234, "div", 16), f(235, "img", 38), o(236, "ul"), o(237, "li"), f(238, "i", 18), s(), o(239, "li"), f(240, "i", 18), s(), o(241, "li"), f(242, "i", 18), s(), o(243, "li"), f(244, "i", 18), s(), o(245, "li"), f(246, "i", 18), s(), s(), o(247, "div", 19), o(248, "a", 20), f(249, "i", 21), d(250, " Add to Cart"), s(), s(), s(), o(251, "div", 22), o(252, "h3"), d(253, "Chocolate Ice Cream"), s(), o(254, "ul"), o(255, "li"), o(256, "span"), d(257, "$28"), s(), s(), o(258, "li"), o(259, "div", 23), o(260, "span", 24), d(261, "-"), s(), f(262, "input", 25), o(263, "span", 26), d(264, "+"), s(), s(), s(), s(), s(), s(), s(), o(265, "div", 39), o(266, "div", 15), o(267, "div", 16), f(268, "img", 40), o(269, "ul"), o(270, "li"), f(271, "i", 18), s(), o(272, "li"), f(273, "i", 18), s(), o(274, "li"), f(275, "i", 18), s(), o(276, "li"), f(277, "i", 18), s(), o(278, "li"), f(279, "i", 18), s(), s(), o(280, "div", 19), o(281, "a", 20), f(282, "i", 21), d(283, " Add to Cart"), s(), s(), s(), o(284, "div", 22), o(285, "h3"), d(286, "Dark Chocolate Cake"), s(), o(287, "ul"), o(288, "li"), o(289, "span"), d(290, "$27"), s(), s(), o(291, "li"), o(292, "div", 23), o(293, "span", 24), d(294, "-"), s(), f(295, "input", 25), o(296, "span", 26), d(297, "+"), s(), s(), s(), s(), s(), s(), s(), s(), s(), s(), f(298, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                JM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-online-order"]
                        ],
                        decls: 83,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "services-area", "ptb-100"],
                            [1, "services-slider", "owl-theme", "owl-carousel"],
                            [1, "services-item"],
                            ["routerLink", "/services-details"],
                            ["src", "assets/img/home-one/services1.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "services-image", 1, "service-shape"],
                            ["src", "assets/img/home-one/services2.png", "alt", "services-image"],
                            ["src", "assets/img/home-one/services3.png", "alt", "services-image"],
                            [1, "download-area", "pt-100", "pb-70"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-6"],
                            [1, "download-content"],
                            [1, "section-title"],
                            [1, "sub-title"],
                            [1, "app-wrap"],
                            ["href", "#"],
                            ["src", "assets/img/home-two/google-store.png", "alt", "Google"],
                            ["src", "assets/img/home-two/app-store.png", "alt", "App"],
                            [1, "download-img"],
                            ["src", "assets/img/home-two/download1.png", "alt", "Download"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Online Order"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Online Order"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "a", 8), f(19, "img", 9), f(20, "img", 10), o(21, "h3"), d(22, "Fresh Healthy Food"), s(), o(23, "p"), d(24, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(25, "div", 7), o(26, "a", 8), f(27, "img", 11), f(28, "img", 10), o(29, "h3"), d(30, "Free Fast Home Delivery"), s(), o(31, "p"), d(32, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(33, "div", 7), o(34, "a", 8), f(35, "img", 12), f(36, "img", 10), o(37, "h3"), d(38, "Discount Voucher"), s(), o(39, "p"), d(40, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), o(41, "div", 7), o(42, "a", 8), f(43, "img", 12), f(44, "img", 10), o(45, "h3"), d(46, "Discount Voucher"), s(), o(47, "p"), d(48, "Fresh food is food which has not been preserved and has not spoiled yet. Fo vegetables and fruits, this means."), s(), s(), s(), s(), s(), s(), o(49, "section", 13), o(50, "div", 1), o(51, "div", 14), o(52, "div", 15), o(53, "div", 16), o(54, "div", 17), o(55, "span", 18), d(56, "Download"), s(), o(57, "h2"), d(58, "Download Our Mobile App That Make You More Easy to Order"), s(), o(59, "p"), d(60, "Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices."), s(), s(), o(61, "ul"), o(62, "li"), o(63, "span"), d(64, "01"), s(), d(65, " Select Your Food"), s(), o(66, "li"), o(67, "span"), d(68, "02"), s(), d(69, " Add to Cart"), s(), o(70, "li"), o(71, "span"), d(72, "03"), s(), d(73, " Order Your Food"), s(), s(), o(74, "div", 19), o(75, "a", 20), f(76, "img", 21), s(), o(77, "a", 20), f(78, "img", 22), s(), s(), s(), s(), o(79, "div", 15), o(80, "div", 23), f(81, "img", 24), s(), s(), s(), s(), s(), f(82, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                XM = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-chefs"]
                        ],
                        decls: 178,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "chef-area", "chef-area-two", "pb-70"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-3"],
                            [1, "chef-item", "active"],
                            [1, "chef-top"],
                            ["src", "assets/img/home-one/chef/1.jpg", "alt", "Chef"],
                            [1, "chef-inner"],
                            [1, "chef-bottom"],
                            ["href", "#", "target", "_blank"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            ["src", "assets/img/home-one/chef/2.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/3.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/4.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/5.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/6.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/7.jpg", "alt", "Chef"],
                            ["src", "assets/img/home-one/chef/8.jpg", "alt", "Chef"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Chefs"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Chefs"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), o(19, "div", 9), f(20, "img", 10), o(21, "div", 11), o(22, "h3"), d(23, "John Doe"), s(), o(24, "span"), d(25, "Head of Chef"), s(), s(), s(), o(26, "div", 12), o(27, "ul"), o(28, "li"), o(29, "a", 13), f(30, "i", 14), s(), s(), o(31, "li"), o(32, "a", 13), f(33, "i", 15), s(), s(), o(34, "li"), o(35, "a", 13), f(36, "i", 16), s(), s(), s(), s(), s(), s(), o(37, "div", 7), o(38, "div", 8), o(39, "div", 9), f(40, "img", 17), o(41, "div", 11), o(42, "h3"), d(43, "John Smith"), s(), o(44, "span"), d(45, "Assistant Chef"), s(), s(), s(), o(46, "div", 12), o(47, "ul"), o(48, "li"), o(49, "a", 13), f(50, "i", 14), s(), s(), o(51, "li"), o(52, "a", 13), f(53, "i", 15), s(), s(), o(54, "li"), o(55, "a", 13), f(56, "i", 16), s(), s(), s(), s(), s(), s(), o(57, "div", 7), o(58, "div", 8), o(59, "div", 9), f(60, "img", 18), o(61, "div", 11), o(62, "h3"), d(63, "Evanaa"), s(), o(64, "span"), d(65, "Intern Chef"), s(), s(), s(), o(66, "div", 12), o(67, "ul"), o(68, "li"), o(69, "a", 13), f(70, "i", 14), s(), s(), o(71, "li"), o(72, "a", 13), f(73, "i", 15), s(), s(), o(74, "li"), o(75, "a", 13), f(76, "i", 16), s(), s(), s(), s(), s(), s(), o(77, "div", 7), o(78, "div", 8), o(79, "div", 9), f(80, "img", 19), o(81, "div", 11), o(82, "h3"), d(83, "Knot Doe"), s(), o(84, "span"), d(85, "Asst. Chef"), s(), s(), s(), o(86, "div", 12), o(87, "ul"), o(88, "li"), o(89, "a", 13), f(90, "i", 14), s(), s(), o(91, "li"), o(92, "a", 13), f(93, "i", 15), s(), s(), o(94, "li"), o(95, "a", 13), f(96, "i", 16), s(), s(), s(), s(), s(), s(), o(97, "div", 7), o(98, "div", 8), o(99, "div", 9), f(100, "img", 20), o(101, "div", 11), o(102, "h3"), d(103, "Tom Joy"), s(), o(104, "span"), d(105, "Asst. Chef"), s(), s(), s(), o(106, "div", 12), o(107, "ul"), o(108, "li"), o(109, "a", 13), f(110, "i", 14), s(), s(), o(111, "li"), o(112, "a", 13), f(113, "i", 15), s(), s(), o(114, "li"), o(115, "a", 13), f(116, "i", 16), s(), s(), s(), s(), s(), s(), o(117, "div", 7), o(118, "div", 8), o(119, "div", 9), f(120, "img", 21), o(121, "div", 11), o(122, "h3"), d(123, "Dev Watson"), s(), o(124, "span"), d(125, "Asst. Chef"), s(), s(), s(), o(126, "div", 12), o(127, "ul"), o(128, "li"), o(129, "a", 13), f(130, "i", 14), s(), s(), o(131, "li"), o(132, "a", 13), f(133, "i", 15), s(), s(), o(134, "li"), o(135, "a", 13), f(136, "i", 16), s(), s(), s(), s(), s(), s(), o(137, "div", 7), o(138, "div", 8), o(139, "div", 9), f(140, "img", 22), o(141, "div", 11), o(142, "h3"), d(143, "Micheal Struck"), s(), o(144, "span"), d(145, "Asst. Chef"), s(), s(), s(), o(146, "div", 12), o(147, "ul"), o(148, "li"), o(149, "a", 13), f(150, "i", 14), s(), s(), o(151, "li"), o(152, "a", 13), f(153, "i", 15), s(), s(), o(154, "li"), o(155, "a", 13), f(156, "i", 16), s(), s(), s(), s(), s(), s(), o(157, "div", 7), o(158, "div", 8), o(159, "div", 9), f(160, "img", 23), o(161, "div", 11), o(162, "h3"), d(163, "Mac John"), s(), o(164, "span"), d(165, "Asst. Chef"), s(), s(), s(), o(166, "div", 12), o(167, "ul"), o(168, "li"), o(169, "a", 13), f(170, "i", 14), s(), s(), o(171, "li"), o(172, "a", 13), f(173, "i", 15), s(), s(), o(174, "li"), o(175, "a", 13), f(176, "i", 16), s(), s(), s(), s(), s(), s(), s(), s(), s(), f(177, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                e5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-book-table"]
                        ],
                        decls: 47,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "book-table-area", "ptb-100"],
                            [1, "book-table-wrap"],
                            [1, "section-title"],
                            [1, "row"],
                            [1, "col-lg-6"],
                            [1, "form-group"],
                            ["type", "text", "placeholder", "Name", 1, "form-control"],
                            ["type", "email", "placeholder", "Email", 1, "form-control"],
                            ["type", "email", "placeholder", "Address", 1, "form-control"],
                            ["type", "text", "placeholder", "Number of table", 1, "form-control"],
                            ["type", "text", "placeholder", "Number of person", 1, "form-control"],
                            ["type", "date", "id", "arrive", "name", "arrive", 1, "form-control"],
                            [1, "col-lg-12"],
                            ["id", "your_message", "rows", "10", "placeholder", "Write a message", 1, "form-control"],
                            [1, "text-center"],
                            ["type", "submit", 1, "btn", "cmn-btn"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Book A Table"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Book A Table"), s(), s(), s(), s(), s(), o(14, "div", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "h2"), d(19, "Book A Table"), s(), s(), o(20, "form"), o(21, "div", 8), o(22, "div", 9), o(23, "div", 10), f(24, "input", 11), s(), s(), o(25, "div", 9), o(26, "div", 10), f(27, "input", 12), s(), s(), o(28, "div", 9), o(29, "div", 10), f(30, "input", 13), s(), s(), o(31, "div", 9), o(32, "div", 10), f(33, "input", 14), s(), s(), o(34, "div", 9), o(35, "div", 10), f(36, "input", 15), s(), s(), o(37, "div", 9), o(38, "div", 10), f(39, "input", 16), s(), s(), o(40, "div", 17), o(41, "div", 10), f(42, "textarea", 18), s(), s(), s(), o(43, "div", 19), o(44, "button", 20), d(45, "Send Message"), s(), s(), s(), s(), s(), s(), f(46, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                t5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-cart"]
                        ],
                        decls: 92,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "cart-area", "ptb-100"],
                            [1, "cart-wrap"],
                            [1, "table"],
                            [1, "thead"],
                            ["scope", "col", 1, "table-head"],
                            ["scope", "row", 1, "table-item"],
                            ["src", "assets/img/home-two/banner/food4.png", "alt", "Menu"],
                            ["routerLink", "/cart"],
                            [1, "bx", "bx-x"],
                            ["src", "assets/img/home-two/banner/food2.png", "alt", "Image"],
                            ["src", "assets/img/home-two/banner/food1.png", "alt", "Image"],
                            ["src", "assets/img/home-two/banner/food3.png", "alt", "Image"],
                            ["src", "assets/img/home-two/banner/food5.png", "alt", "Image"],
                            [1, "shop-back"],
                            ["routerLink", "/checkout"],
                            [1, "total-shopping"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Cart"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Cart"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "table", 7), o(18, "thead", 8), o(19, "tr"), o(20, "th", 9), d(21, "Images"), s(), o(22, "th", 9), d(23, "Items"), s(), o(24, "th", 9), d(25, "Prices"), s(), o(26, "th", 9), d(27, "Remove"), s(), s(), s(), o(28, "tbody"), o(29, "tr"), o(30, "th", 10), f(31, "img", 11), s(), o(32, "td"), d(33, "Burger"), s(), o(34, "td"), d(35, "$10.00"), s(), o(36, "td"), o(37, "a", 12), f(38, "i", 13), s(), s(), s(), o(39, "tr"), o(40, "th", 10), f(41, "img", 14), s(), o(42, "td"), d(43, "Pasta"), s(), o(44, "td"), d(45, "$15.00"), s(), o(46, "td"), o(47, "a", 12), f(48, "i", 13), s(), s(), s(), o(49, "tr"), o(50, "th", 10), f(51, "img", 15), s(), o(52, "td"), d(53, "Sandwich"), s(), o(54, "td"), d(55, "$20.00"), s(), o(56, "td"), o(57, "a", 12), f(58, "i", 13), s(), s(), s(), o(59, "tr"), o(60, "th", 10), f(61, "img", 16), s(), o(62, "td"), d(63, "Pizza"), s(), o(64, "td"), d(65, "$15.00"), s(), o(66, "td"), o(67, "a", 12), f(68, "i", 13), s(), s(), s(), o(69, "tr"), o(70, "th", 10), f(71, "img", 17), s(), o(72, "td"), d(73, "Chinese"), s(), o(74, "td"), d(75, "$30.00"), s(), o(76, "td"), o(77, "a", 12), f(78, "i", 13), s(), s(), s(), s(), s(), o(79, "div", 18), o(80, "a", 19), d(81, "Go for Order?"), s(), s(), o(82, "div", 20), o(83, "h2"), d(84, "Total Order"), s(), o(85, "h3"), d(86, "Total: "), o(87, "span"), d(88, "$90.00"), s(), s(), o(89, "a", 19), d(90, "Checkout Items"), s(), s(), s(), s(), s(), f(91, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                n5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-checkout"]
                        ],
                        decls: 82,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "checkout-area", "ptb-100"],
                            [1, "row"],
                            [1, "col-lg-6"],
                            [1, "checkout-item"],
                            [1, "checkout-one"],
                            [1, "form-group"],
                            ["type", "text", 1, "form-control"],
                            [1, "checkout-two"],
                            [1, "form-check"],
                            ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"],
                            ["for", "defaultCheck1", 1, "form-check-label"],
                            ["href", "#"],
                            [1, "text-center"],
                            ["target", "_blank", "href", "#"],
                            ["src", "assets/img/1.png", "alt", "Payment"],
                            ["src", "assets/img/2.png", "alt", "Payment"],
                            ["src", "assets/img/3.png", "alt", "Payment"],
                            ["type", "submit", 1, "btn", "cmn-btn"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Checkout"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Checkout"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), o(19, "h2"), d(20, "Customer Details"), s(), o(21, "div", 9), o(22, "form"), o(23, "div", 10), o(24, "label"), d(25, "First Name:"), s(), f(26, "input", 11), s(), o(27, "div", 10), o(28, "label"), d(29, "Last Name:"), s(), f(30, "input", 11), s(), o(31, "div", 10), o(32, "label"), d(33, "Address:"), s(), f(34, "input", 11), s(), o(35, "div", 10), o(36, "label"), d(37, "City:"), s(), f(38, "input", 11), s(), o(39, "div", 10), o(40, "label"), d(41, "Postal Code:"), s(), f(42, "input", 11), s(), o(43, "div", 10), o(44, "label"), d(45, "Country:"), s(), f(46, "input", 11), s(), s(), s(), s(), s(), o(47, "div", 7), o(48, "div", 8), o(49, "h2"), d(50, "Payment Methods"), s(), o(51, "div", 12), o(52, "h3"), d(53, "Direct Bank Transfer"), s(), o(54, "p"), d(55, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab minima, facere excepturi, adipisci unde, mollitia aperiam ea laboriosam consectetur numquam odio obcaecati quas doloribus quam architecto consequuntur quaerat quos."), s(), o(56, "p"), d(57, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quidem omnis debitis iusto optio. Necessitatibus aliquid soluta cum consectetur atque ipsum corporis non.."), s(), o(58, "div", 13), f(59, "input", 14), o(60, "label", 15), o(61, "span"), d(62, "I have read and agree to the websites "), o(63, "a", 16), d(64, "Terms and Conditions"), s(), s(), s(), s(), o(65, "div", 17), o(66, "span"), d(67, "or"), s(), s(), o(68, "ul"), o(69, "li"), o(70, "a", 18), f(71, "img", 19), s(), s(), o(72, "li"), o(73, "a", 18), f(74, "img", 20), s(), s(), o(75, "li"), o(76, "a", 18), f(77, "img", 21), s(), s(), s(), s(), s(), s(), s(), o(78, "div", 17), o(79, "button", 22), d(80, "Send Details"), s(), s(), s(), s(), f(81, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                r5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-coming-soon"]
                        ],
                        decls: 44,
                        vars: 0,
                        consts: [
                            [1, "coming-area"],
                            [1, "coming-item"],
                            [1, "d-table"],
                            [1, "d-table-cell"],
                            [1, "container"],
                            [1, "coming-text"],
                            [1, "row", "coming-wrap"],
                            [1, "col-6", "col-sm-6", "col-lg-3"],
                            [1, "coming-inner"],
                            ["id", "days"],
                            ["id", "hours"],
                            ["id", "minutes"],
                            ["id", "seconds"],
                            ["target", "_blank", "href", "#"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-linkedin"],
                            [1, "bx", "bxl-pinterest"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "section", 0), o(1, "div", 1), o(2, "div", 2), o(3, "div", 3), o(4, "div", 4), o(5, "div", 5), o(6, "h1"), d(7, "Under Construction..."), s(), o(8, "p"), d(9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea deserunt beatae voluptas, animi harum dolorum totam, praesentium, dolor sint aspernatur perspiciatis iusto labore nulla rerum earum! Sit commodi quia provident!"), s(), o(10, "div", 6), o(11, "div", 7), o(12, "div", 8), f(13, "h3", 9), o(14, "p"), d(15, "Days"), s(), s(), s(), o(16, "div", 7), o(17, "div", 8), f(18, "h3", 10), o(19, "p"), d(20, "Hours"), s(), s(), s(), o(21, "div", 7), o(22, "div", 8), f(23, "h3", 11), o(24, "p"), d(25, "Minutes"), s(), s(), s(), o(26, "div", 7), o(27, "div", 8), f(28, "h3", 12), o(29, "p"), d(30, "Seconds"), s(), s(), s(), s(), o(31, "ul"), o(32, "li"), o(33, "a", 13), f(34, "i", 14), s(), s(), o(35, "li"), o(36, "a", 13), f(37, "i", 15), s(), s(), o(38, "li"), o(39, "a", 13), f(40, "i", 16), s(), s(), o(41, "li"), o(42, "a", 13), f(43, "i", 17), s(), s(), s(), s(), s(), s(), s(), s(), s())
                        },
                        styles: [""]
                    }), e
                })(),
                i5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-terms-conditions"]
                        ],
                        decls: 48,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "privacy-area", "pt-100"],
                            [1, "privacy-item"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Terms & Conditions"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Terms & Conditions"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "h2"), d(18, "1.What is Terms & Conditions?"), s(), o(19, "p"), d(20, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), s(), s(), o(21, "div", 6), o(22, "h2"), d(23, "2.How do we apply our Terms & Conditions?"), s(), o(24, "p"), d(25, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), s(), o(26, "p"), d(27, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), s(), s(), o(28, "div", 6), o(29, "h2"), d(30, "3.How we do manage everything"), s(), o(31, "ul"), o(32, "li"), f(33, "i", 4), d(34, " Our chefs are very dedicated on work"), s(), o(35, "li"), f(36, "i", 4), d(37, " Our restaurant always gives best services"), s(), o(38, "li"), f(39, "i", 4), d(40, " We always give qualityful food"), s(), o(41, "li"), f(42, "i", 4), d(43, " You can get everything under a roof"), s(), o(44, "li"), f(45, "i", 4), d(46, " We have a option to give online service"), s(), s(), s(), s(), s(), f(47, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                o5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-privacy-policy"]
                        ],
                        decls: 48,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "privacy-area", "pt-100"],
                            [1, "privacy-item"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Privacy Policy"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Privacy Policy"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "h2"), d(18, "1.What is Privacy Policy?"), s(), o(19, "p"), d(20, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), s(), s(), o(21, "div", 6), o(22, "h2"), d(23, "2.How do we apply our Privacy Policy?"), s(), o(24, "p"), d(25, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), s(), o(26, "p"), d(27, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "), s(), s(), o(28, "div", 6), o(29, "h2"), d(30, "3.How we do serve for you"), s(), o(31, "ul"), o(32, "li"), f(33, "i", 4), d(34, " Our chefs are very dedicated on work"), s(), o(35, "li"), f(36, "i", 4), d(37, " Our restaurant always gives best services"), s(), o(38, "li"), f(39, "i", 4), d(40, " We always give qualityful food"), s(), o(41, "li"), f(42, "i", 4), d(43, " You can get everything under a roof"), s(), o(44, "li"), f(45, "i", 4), d(46, " We have a option to give online service"), s(), s(), s(), s(), s(), f(47, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })(),
                Jb = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-error"]
                        ],
                        decls: 15,
                        vars: 0,
                        consts: [
                            [1, "error-area"],
                            [1, "error-item"],
                            [1, "d-table"],
                            [1, "d-table-cell"],
                            [1, "error-text"],
                            ["routerLink", "/"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "section", 0), o(2, "div", 1), o(3, "div", 2), o(4, "div", 3), o(5, "div", 4), o(6, "h1"), d(7, "404!"), s(), o(8, "p"), d(9, "Sorry! The Page Not Found"), s(), o(10, "span"), d(11, "Oops! The page you are looking for does not exit. it might been moved or deleted."), s(), o(12, "a", 5), d(13, "Return to Home"), s(), s(), s(), s(), s(), s(), f(14, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })();
            const s5 = [{
                path: "",
                component: HM
            }, {
                path: "home-two",
                component: $M
            }, {
                path: "home-three",
                component: qM
            }, {
                path: "about",
                component: WM
            }, {
                path: "categories",
                component: zM
            }, {
                path: "services",
                component: GM
            }, {
                path: "services-details",
                component: QM
            }, {
                path: "blog",
                component: YM
            }, {
                path: "blog-details",
                component: KM
            }, {
                path: "food-collection",
                component: ZM
            }, {
                path: "online-order",
                component: JM
            }, {
                path: "chefs",
                component: XM
            }, {
                path: "faq",
                component: (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-faq"]
                        ],
                        decls: 113,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-one"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "faq-area", "pt-100", "pb-70"],
                            [1, "row", "faq-wrap"],
                            [1, "col-lg-12"],
                            [1, "faq-head"],
                            [1, "faq-item"],
                            [1, "accordion"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "FAQ"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "FAQ"), s(), s(), s(), s(), s(), o(14, "section", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), o(19, "h2"), d(20, "Common Questions"), s(), s(), o(21, "div", 9), o(22, "ul", 10), o(23, "li"), o(24, "a"), d(25, "How we serve food?"), s(), o(26, "p"), d(27, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?"), s(), s(), o(28, "li"), o(29, "a"), d(30, "How is our food quality?"), s(), o(31, "p"), d(32, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?"), s(), s(), o(33, "li"), o(34, "a"), d(35, "How do we give home delivery?"), s(), o(36, "p"), d(37, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?"), s(), s(), o(38, "li"), o(39, "a"), d(40, "How can we get in touch with you?"), s(), o(41, "p"), d(42, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?"), s(), s(), o(43, "li"), o(44, "a"), d(45, "Is this restaurant 24 hours open?"), s(), o(46, "p"), d(47, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?"), s(), s(), s(), s(), s(), s(), o(48, "div", 6), o(49, "div", 7), o(50, "div", 8), o(51, "h2"), d(52, "Pizza"), s(), s(), o(53, "div", 9), o(54, "ul", 10), o(55, "li"), o(56, "a"), d(57, "How we make pizza?"), s(), o(58, "p"), d(59, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident porro laboriosam magni labore quaerat, aspernatur iusto error ducimus adipisci, et corporis recusandae illum tenetur hic? Earum excepturi porro fuga ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat, expedita vero et quia saepe debitis exercitationem labore consequatur fuga ab, laudantium sed maiores velit reiciendis. Ullam illo laborum sequi."), s(), s(), o(60, "li"), o(61, "a"), d(62, "What is our pizza quality?"), s(), o(63, "p"), d(64, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident porro laboriosam magni labore quaerat, aspernatur iusto error ducimus adipisci, et corporis recusandae illum tenetur hic? Earum excepturi porro fuga ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint natus ipsa accusantium saepe dolorem a mollitia tempora consequatur totam modi pariatur nulla, aspernatur dolore consequuntur temporibus unde minima repellendus laboriosam."), s(), s(), o(65, "li"), o(66, "a"), d(67, "What people say about our pizza?"), s(), o(68, "p"), d(69, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident porro laboriosam magni labore quaerat, aspernatur iusto error ducimus adipisci, et corporis recusandae illum tenetur hic? Earum excepturi porro fuga ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint natus ipsa accusantium saepe dolorem a mollitia tempora consequatur totam modi pariatur nulla, aspernatur dolore consequuntur temporibus unde minima repellendus laboriosam."), s(), s(), o(70, "li"), o(71, "a"), d(72, "Do we give home delivery to pizza?"), s(), o(73, "p"), d(74, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident porro laboriosam magni labore quaerat, aspernatur iusto error ducimus adipisci, et corporis recusandae illum tenetur hic? Earum excepturi porro fuga ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint natus ipsa accusantium saepe dolorem a mollitia tempora consequatur totam modi pariatur nulla, aspernatur dolore consequuntur temporibus unde minima repellendus laboriosam."), s(), s(), o(75, "li"), o(76, "a"), d(77, "When pizza is available?"), s(), o(78, "p"), d(79, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident porro laboriosam magni labore quaerat, aspernatur iusto error ducimus adipisci, et corporis recusandae illum tenetur hic? Earum excepturi porro fuga ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint natus ipsa accusantium saepe dolorem a mollitia tempora consequatur totam modi pariatur nulla, aspernatur dolore consequuntur temporibus unde minima repellendus laboriosam."), s(), s(), s(), s(), s(), s(), o(80, "div", 6), o(81, "div", 7), o(82, "div", 8), o(83, "h2"), d(84, "Pasta"), s(), s(), o(85, "div", 9), o(86, "ul", 10), o(87, "li"), o(88, "a"), d(89, "How we make pasta?"), s(), o(90, "p"), d(91, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3"), s(), s(), o(92, "li"), o(93, "a"), d(94, "What is our pizza quality?"), s(), o(95, "p"), d(96, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3"), s(), s(), o(97, "li"), o(98, "a"), d(99, "What people say about our pasta?"), s(), o(100, "p"), d(101, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3"), s(), s(), o(102, "li"), o(103, "a"), d(104, "Do we give home delivery to pizza?"), s(), o(105, "p"), d(106, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3"), s(), s(), o(107, "li"), o(108, "a"), d(109, "When pizza is available?"), s(), o(110, "p"), d(111, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos mollitia voluptatum aliquam repellendus similique iure fuga aspernatur amet odit! At vitae dicta excepturi quasi? Veritatis, pariatur excepturi! Illum, ut?3"), s(), s(), s(), s(), s(), s(), s(), s(), f(112, "app-footer-style-two"))
                        },
                        directives: [Ge, le, ze],
                        styles: [""]
                    }), e
                })()
            }, {
                path: "book-table",
                component: e5
            }, {
                path: "cart",
                component: t5
            }, {
                path: "checkout",
                component: n5
            }, {
                path: "coming-soon",
                component: r5
            }, {
                path: "terms-conditions",
                component: i5
            }, {
                path: "privacy-policy",
                component: o5
            }, {
                path: "error",
                component: Jb
            }, {
                path: "contact",
                component: (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-contact"]
                        ],
                        decls: 91,
                        vars: 0,
                        consts: [
                            [1, "page-title-area", "page-title-img-three"],
                            [1, "container"],
                            [1, "page-title-item"],
                            ["routerLink", "/"],
                            [1, "bx", "bx-chevron-right"],
                            [1, "contact-location-area", "pt-100", "pb-70"],
                            [1, "row"],
                            [1, "col-sm-6", "col-lg-4"],
                            [1, "location-item"],
                            ["src", "assets/img/home-one/services-shape.png", "alt", "Location"],
                            [1, "bx", "bxs-time-five"],
                            [1, "location-item", "active"],
                            [1, "bx", "bxs-location-plus"],
                            [1, "col-sm-6", "offset-sm-3", "offset-lg-0", "col-lg-4"],
                            [1, "bx", "bxs-phone-call"],
                            ["href", "tel:+11234567890"],
                            ["href", "tel:+23256594596"],
                            [1, "contact-form-area", "ptb-100"],
                            [1, "col-lg-6"],
                            [1, "contact-item"],
                            ["id", "contactForm"],
                            [1, "col-sm-6", "col-lg-12"],
                            [1, "form-group"],
                            ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Name", 1, "form-control"],
                            ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Email", 1, "form-control"],
                            ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Phone", 1, "form-control"],
                            ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Subject", 1, "form-control"],
                            [1, "col-md-12", "col-lg-12"],
                            ["name", "message", "id", "message", "cols", "30", "rows", "6", "required", "", "placeholder", "Message", 1, "form-control"],
                            ["type", "submit", 1, "cmn-btn", "btn"],
                            [1, "contact-social"],
                            ["href", "#", "target", "_blank"],
                            [1, "bx", "bxl-facebook"],
                            [1, "bx", "bxl-twitter"],
                            [1, "bx", "bxl-instagram"],
                            [1, "bx", "bxl-youtube"],
                            [1, "contact-img"],
                            ["src", "assets/img/contact-man.png", "alt", "Contact"]
                        ],
                        template: function (n, r) {
                            1 & n && (f(0, "app-navbar-style-three"), o(1, "div", 0), o(2, "div", 1), o(3, "div", 2), o(4, "h2"), d(5, "Contact Us"), s(), o(6, "ul"), o(7, "li"), o(8, "a", 3), d(9, "Home"), s(), s(), o(10, "li"), f(11, "i", 4), s(), o(12, "li"), d(13, "Contact Us"), s(), s(), s(), s(), s(), o(14, "div", 5), o(15, "div", 1), o(16, "div", 6), o(17, "div", 7), o(18, "div", 8), f(19, "img", 9), f(20, "i", 10), o(21, "ul"), o(22, "li"), d(23, "9:00 AM to 12:00 AM"), s(), o(24, "li"), d(25, "(Saturday to Thursday)"), s(), s(), s(), s(), o(26, "div", 7), o(27, "div", 11), f(28, "img", 9), f(29, "i", 12), o(30, "ul"), o(31, "li"), d(32, "Br1. 28/A Street, New York, USA"), s(), o(33, "li"), d(34, "Br2. 31/B Street, Washington, USA"), s(), s(), s(), s(), o(35, "div", 13), o(36, "div", 8), f(37, "img", 9), f(38, "i", 14), o(39, "ul"), o(40, "li"), o(41, "a", 15), d(42, "(Branch 1) +1 123 456 7890"), s(), s(), o(43, "li"), o(44, "a", 16), d(45, "(Branch 2) +2 325 659 4596"), s(), s(), s(), s(), s(), s(), s(), s(), o(46, "div", 17), o(47, "div", 1), o(48, "div", 6), o(49, "div", 18), o(50, "div", 19), o(51, "form", 20), o(52, "div", 6), o(53, "div", 21), o(54, "div", 22), f(55, "input", 23), s(), s(), o(56, "div", 21), o(57, "div", 22), f(58, "input", 24), s(), s(), o(59, "div", 21), o(60, "div", 22), f(61, "input", 25), s(), s(), o(62, "div", 21), o(63, "div", 22), f(64, "input", 26), s(), s(), o(65, "div", 27), o(66, "div", 22), f(67, "textarea", 28), s(), s(), o(68, "div", 27), o(69, "button", 29), d(70, "Send Message"), s(), s(), s(), s(), o(71, "div", 30), o(72, "span"), d(73, "Follow Us on"), s(), o(74, "ul"), o(75, "li"), o(76, "a", 31), f(77, "i", 32), s(), s(), o(78, "li"), o(79, "a", 31), f(80, "i", 33), s(), s(), o(81, "li"), o(82, "a", 31), f(83, "i", 34), s(), s(), o(84, "li"), o(85, "a", 31), f(86, "i", 35), s(), s(), s(), s(), s(), s(), o(87, "div", 18), o(88, "div", 36), f(89, "img", 37), s(), s(), s(), s(), s(), f(90, "app-footer-style-one"))
                        },
                        directives: [Ge, le, vf],
                        styles: [""]
                    }), e
                })()
            }, {
                path: "**",
                component: Jb
            }];
            let a5 = (() => {
                    class e {}
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275mod = Xn({
                        type: e
                    }), e.\u0275inj = bn({
                        imports: [
                            [Qb.forRoot(s5, {
                                relativeLinkResolution: "legacy"
                            })], Qb
                        ]
                    }), e
                })(),
                l5 = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-preloader"]
                        ],
                        decls: 4,
                        vars: 0,
                        consts: [
                            [1, "loader"],
                            [1, "d-table"],
                            [1, "d-table-cell"],
                            [1, "spinner"]
                        ],
                        template: function (n, r) {
                            1 & n && (o(0, "div", 0), o(1, "div", 1), o(2, "div", 2), f(3, "div", 3), s(), s(), s())
                        },
                        styles: [""]
                    }), e
                })(),
                u5 = (() => {
                    class e {
                        constructor(n) {
                            this.router = n
                        }
                        ngOnInit() {
                            this.recallJsFuntions()
                        }
                        recallJsFuntions() {
                            this.router.events.subscribe(n => {
                                n instanceof Ka && $(".loader").fadeIn("slow")
                            }), this.routerSubscription = this.router.events.pipe(_r(n => n instanceof Dr || n instanceof Kd)).subscribe(n => {
                                $.getScript("../assets/js/custom.js"), $(".loader").fadeOut("slow"), this.location = this.router.url, n instanceof Dr && window.scrollTo(0, 0)
                            })
                        }
                    }
                    return e.\u0275fac = function (n) {
                        return new(n || e)(F(pt))
                    }, e.\u0275cmp = ne({
                        type: e,
                        selectors: [
                            ["app-root"]
                        ],
                        features: [b1([Oa, {
                            provide: Cr,
                            useClass: wd
                        }])],
                        decls: 2,
                        vars: 0,
                        template: function (n, r) {
                            1 & n && (f(0, "app-preloader"), f(1, "router-outlet"))
                        },
                        directives: [l5, uf],
                        styles: [""]
                    }), e
                })(),
                c5 = (() => {
                    class e {}
                    return e.\u0275fac = function (n) {
                        return new(n || e)
                    }, e.\u0275mod = Xn({
                        type: e,
                        bootstrap: [u5]
                    }), e.\u0275inj = bn({
                        providers: [],
                        imports: [
                            [tT, a5]
                        ]
                    }), e
                })();
            (function () {
                if (gv) throw new Error("Cannot enable prod mode after platform setup.");
                pv = !1
            })(), XS().bootstrapModule(c5).catch(e => console.error(e))
        }
    },
    Ue => {
        Ue(Ue.s = 919)
    }
]);