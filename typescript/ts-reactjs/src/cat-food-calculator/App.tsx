import React, {FC, useEffect, useState} from 'react';

export const App: FC = () => {
    const [weight, setWeight] = useState(5);
    const [rate, setRate] = useState(3);

    useEffect(() => {
        document.title = '主子生骨肉计算器'
    });
    const g = weight * 1000 * rate / 100;
    //肉类
    const meat = Math.floor(g * .83);
    //内脏
    const viscera = Math.floor(g * .1);
    //骨骼
    const skeleton = Math.floor(g * .07);
    //钙质/蛋壳粉
    const ca = Math.floor(meat * 0.5) / 100;
    return (
        <>
            <header>
                <h1>喵咪生骨肉食量计算器</h1>主子
            </header>
            <main>
                <form>
                    <p>
                        <label htmlFor='weight'>体重</label>
                        <input id={'weight'}
                               type={'number'}
                               value={weight}
                               onChange={e => setWeight(Number.parseFloat(e.target.value))}
                        />
                        <label htmlFor='weight'>KG</label>
                    </p>
                    <p>
                        <label htmlFor='rate'>比率</label>
                        <input id={'rate'}
                               type={'number'}
                               value={rate}
                               onChange={e => setRate(Number.parseFloat(e.target.value))}
                        />
                        <label htmlFor='rate'>%</label>
                    </p>
                </form>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th scope='col'>肉类</th>
                        <th scope='col'>内脏</th>
                        <th scope='col'>骨骼</th>
                        <th scope='col'>蛋壳粉（骨骼替换品）</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope='row'>一天总量</th>
                        <td>{meat}g</td>
                        <td>{viscera}g</td>
                        <td>{skeleton}g</td>
                        <td>{ca}g</td>
                    </tr>
                    <tr>
                        <th scope='row'>五天总量</th>
                        <td>{meat * 5}g</td>
                        <td>{viscera * 5}g</td>
                        <td>{skeleton * 5}g</td>
                        <td>{ca * 5}g</td>
                    </tr>
                    <tr>
                        <th scope='row'>七天总量</th>
                        <td>{meat * 7}g</td>
                        <td>{viscera * 7}g</td>
                        <td>{skeleton * 7}g</td>
                        <td>{ca * 7}g</td>
                    </tr>
                    <tr>
                        <th scope='row'>30天总量</th>
                        <td>{meat * 30}g</td>
                        <td>{viscera * 30}g</td>
                        <td>{skeleton * 30}g</td>
                        <td>{ca * 30}g</td>
                    </tr>
                    </tbody>
                </table>
            </main>
            <footer>
                <p>copyright reserved by histcat</p>
            </footer>
        </>
    )
};