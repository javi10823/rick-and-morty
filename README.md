How are you ensuring data consistency in your flatlist (e.g. not show duplicates) when
dealing with paginated content?

- I'm checking every new item and only add it to the state if it don't exists yet.

How would you ensure this flatlist remains fast with many objects to be displayed?

- Flatlist only render the content that is currently visible. The other content is not just hidded but it isn't rendered.
