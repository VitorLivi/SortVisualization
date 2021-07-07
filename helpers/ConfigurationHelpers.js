export default {
    generateRandomConfiguration: function (numberOfColumns = 10, maxValue = 10, minValue = 2) {
        let configuration = [];

        numberOfColumns = Number(numberOfColumns)
        maxValue = Number(maxValue)
        minValue = Number(minValue)

        const everythingOk = this.verifyConfigurationValues(numberOfColumns, maxValue, minValue)

        if (everythingOk) {
            for (var i = 0; i < numberOfColumns; i++) {
                let newColumnValue = Math.floor(Math.random() * (maxValue - minValue)) + minValue
                const height = ( newColumnValue > 0 ? newColumnValue : newColumnValue * -1) * 100 / maxValue

                if (i == 0) {
                    configuration = [{
                        index: i,
                        value: newColumnValue,
                        height: height
                    }];
                } else {
                    configuration.push({
                        index: i,
                        value: newColumnValue,
                        height: height
                    });
                }
            }
            return configuration;
        }

        for (var i = 0; i <= numberOfColumns; i++) {
            configuration.push({
                index: i,
                value: 0,
                height: 0
            });
        }

        return configuration
    },

    verifyConfigurationValues: function (numberOfColumns, maxValue, minValue) {

        if (maxValue < minValue) {
            alert("The maximum value cannot be less than the minimum value.")
            return false
        }

        if (numberOfColumns > 1000) {
            alert("The number of columns cannot be greater than 1000")
            return false
        }

        return true
    }

}