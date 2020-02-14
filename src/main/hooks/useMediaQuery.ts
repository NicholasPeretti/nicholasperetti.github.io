export default function useMediaQuery(query: string | Array<string>) {
  if (typeof query === 'string') {
    return window.matchMedia(query).matches
  } else {
    return query.reduce(
      (acc, query) => acc && window.matchMedia(query).matches,
      true
    )
  }
}
