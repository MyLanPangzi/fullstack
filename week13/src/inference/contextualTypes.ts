/**
 * 1，上下文类型，能根据左侧的类型声明推断出右侧的赋值定义
 * 2，可显示提供最佳候选类型
 */
window.onmousedown = (e:any) => console.log(e.altKey);///onmousedown: ((this:GlobalEventHandlers, ev: MouseEvent) => any) | nul
