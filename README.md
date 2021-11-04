# Baba Is You

You know what they say. If you can't beat it, make your own implementation.

![Level+0](https://user-images.githubusercontent.com/11951801/139968808-b0446696-92b4-4113-96bc-706e4310d934.png)

## Entity

An entity combines a **Noun** and **Actions**.

- It can be one **Noun**
- **Noun** can be transform
  ed based on rules that are applied
  - `BABA IS YOU` -> `ROCK IS YOU` will give the user control of all `ROCK` entities
  - `ROCK IS FLAG` -> all `ROCK` entities will become `FLAG` entities
- It can have one or more **Actions** applied
  - `BABA IS YOU` horizontally + `BABA IS WIN` vertically

## TextEntity

Text always looks the same and has the same actions.

- It always has the push **Action** applied
- It always has the same text for the visual
- It cannot be transformed into something else or destroyed
- It can display text corresponding to a **Noun**, an **Action**, or a **Connector**

### Noun

- `BABA`
- `ROCK`
- `WALL`
- `FLAG`

### Action

- `YOU`
  - The controllable character
  - If no **Noun** corresponds to `YOU`, it's game over
- `PUSH`
  - The character can move the entity
- `STOP`
  - The character can not move the entity
  - The character can not move through the entity
- `WIN`
  - If the character moves onto the `WIN` entity, level complete
  - If the character is the `WIN` entity, level complete
- Default
  - By default, the character will not interact with an entity and can move through it

## Connector

- `IS`
  - Connects a **Noun** to an **Action** to create a rule

## Rule

A noun plus an action creates a rule.

- A rule has to read Noun-to-Action left-to-right or top-to-bottom (`WIN IS FLAG` will not work)
- Consequently, the same **Noun** can be used for two rules
- A rule with `IS YOU` must exist for the game to continue
- A rule with `IS WIN` must exist for the level to be complete
