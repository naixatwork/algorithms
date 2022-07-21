interface HashElement {
    code: number,
    snowflakes: number[][]
}

type TMyHashTable = Array<HashElement>;

class MyHashTable {
    private static tableSize = 100000;
    private static table: TMyHashTable = new Array<HashElement>(MyHashTable.tableSize);

    private hashFunction(snowflakes: number[]): number {
        let sum = 0;
        const hashFormula = (input): number => parseInt(input) % MyHashTable.tableSize
        for (const snowflake in snowflakes) {
            sum += hashFormula(snowflake);
        }
        return sum;
    }

    private findElementAccordingToCode = (code): undefined | HashElement => {
        return MyHashTable.table.find((item) => item?.code === code);
    }

    public setElement = (snowflake: number[]): void => {
        const hash = this.hashFunction(snowflake);

        const element: undefined | HashElement
            = this.findElementAccordingToCode(hash);

        const insertNewElement = (code: number): void => {
            MyHashTable.table.push({
                code: hash,
                snowflakes: [snowflake],
            })
        }

        const insertSnowflakeAccordingToCode = (): void => {
            element.snowflakes.push(snowflake)
        }

        if (element) {
            insertSnowflakeAccordingToCode();
        }
        if (!element) {
            insertNewElement(hash);
        }

        console.log(MyHashTable.table);
    }
}

const table = new MyHashTable();
table.setElement([1, 2, 3, 4, 5, 6])
// table.setElement([1, 2, 3, 4, 5, 6])
// table.setElement([4, 5, 6, 1, 2, 3])
table.setElement([4, 5, 6, 100001, 2, 3])
