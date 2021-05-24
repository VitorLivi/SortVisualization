export default {

    generateRandomConfiguration: function (numberOfColumns: number = 10, maxValue: number = 10, minValue: number = 2) {
        let configuration: object[] = [];
        for (var i = 0; i <= numberOfColumns; i++) {
            const newColumnValue = Math.floor(Math.random() * (maxValue - minValue)) + minValue;

            configuration.push({
                index: i,
                value: newColumnValue,
                height: newColumnValue * 100 / maxValue
            });
        }
        return configuration;
    }

}