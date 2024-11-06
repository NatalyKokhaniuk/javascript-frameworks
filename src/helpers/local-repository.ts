export abstract class LocalRepository {
  static set<TEntity>(key: string, data: TEntity) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static get<TEntity>(key: string, defaultValue?: TEntity) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return defaultValue
  }
}
