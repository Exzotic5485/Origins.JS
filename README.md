# OriginsJS
Origins JS is a "wrapper" to make [origins](https://www.curseforge.com/minecraft/mc-mods/origins) specific minecraft datapacks. It was partially generated from the origins docs to use as a base then modified from there.

This library can be quicker to setup and make origins easier to code with more efficiently. For example you can make a custom "Spells" class that has custom logic that provides an easier way to make modular powers.

### Notes:
I would suggest using [**typescript**](https://www.typescriptlang.org/) with this library as you will bennefit from type checking compared to traditional datapacks.
Other things to note are any methods prefixed with `add` are usually "dynamic" and will use things like `origins:and` automatically, whereas methods prefixed with `set` will just set the value with what you provide.
## Links

 - [OriginsJS Documentation](#)
 - [Origins Documentation](https://origins.readthedocs.io/en/latest/)
 - [NPM Package](https://www.npmjs.com/package/originsjs)


## Usage/Examples
**Avian Origin**
```ts
import { ActionOnWakeUpPower, AndMetaAction, AndMetaCondition, AttributePower, AttributedAttributeModifierBuilder, Datapack, FoodItemCondition, GiveEntityAction, HeightBlockCondition, IngredientItemCondition, ItemStackBuilder, MeatItemCondition, OrMetaCondition, Origin, PlaySoundEntityAction, PreventItemUsePower, PreventSleepPower } from "originsjs";

const datapack = new Datapack("namespace");

const avianOrigin = new Origin()
.setName("Avian")
.setIcon("minecraft:feather")
.setImpact(1)

const freshAir = new PreventSleepPower()
    .setBlockCondition(
        new HeightBlockCondition()
            .setComparison("<")
            .setCompareTo(86)
    )
    .setMessage("origins.avian_sleep_fail");

const tailwind = new AttributePower()
    .setModifier(
        new AttributedAttributeModifierBuilder()
            .setAttribute("minecraft:generic.movement_speed")
            .setValue(0.02)
            .setName("Tailwind speed bonus")
            .setOperation("addition")
    );

const layEggs = new ActionOnWakeUpPower()
    .setEntityAction(
        new AndMetaAction()
        .add(
            new GiveEntityAction()
                .setStack(
                    new ItemStackBuilder()
                        .setItem("minecraft:egg")
                ),

            new PlaySoundEntityAction()
                .setSound("minecraft:entity.chicken.egg")
    )
)

const vegetarian = new PreventItemUsePower()
.setItemCondition(
    new AndMetaCondition()
    .add(
        new OrMetaCondition()
        .add(
            new IngredientItemCondition()
            .setIngredient({ tag: "origins:meat" }),

            new MeatItemCondition()
        ),

        new FoodItemCondition(),

        new IngredientItemCondition()
        .setIngredient({ tag: "origins:ignore_diet" })
        .setInverted(true)
    )
)

avianOrigin.addPowers([ freshAir, tailwind, layEggs, vegetarian ])
avianOrigin.addPowerReference("origins:slow_falling")

datapack.addOrigin(avianOrigin)

datapack.build("./avian.zip")
```

