 export default interface MainProviderInterface {
    setNumberOfColumns: Function,
    syncConfiguration: Function,
    configuration: object[],
    setConfiguration: Function,
    setMaxValue: Function,
    setMinValue: Function,
    setVelocity: Function,
    selectableSorts: [any]
    selectedSort: number,
    maxValue: number,
    minValue: number,
    velocity: number,
    numberOfColumns: number
}