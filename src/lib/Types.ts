import BaseBientityAction from "./BientityActions/BaseBientityAction";
import BaseBientityCondition from "./BientityConditions/BaseBientityCondition";
import BaseBiomeCondition from "./BiomeConditions/BaseBiomeCondition";
import BaseBlockAction from "./BlockActions/BaseBlockAction";
import BaseBlockCondition from "./BlockConditions/BaseBlockCondition";
import BaseDamageCondition from "./DamageConditions/BaseDamageCondition";
import BaseEntityAction from "./EntityActions/BaseEntityAction";
import BaseEntityCondition from "./EntityConditions/BaseEntityCondition";
import EmptyFluidCondition from "./FluidConditions/EmptyFluidCondition";
import BaseItemAction from "./ItemActions/BaseItemAction";
import BaseItemCondition from "./ItemConditions/BaseItemCondition";
import BaseMetaAction from "./MetaActions/BaseMetaAction";
import BaseMetaCondition from "./MetaConditions/BaseMetaCondition";
import BasePower from "./PowerTypes/BasePower";

export type Comparison = "<" | "<=" | ">" | ">=" | "==" | "!=";
export type Identifier = `${string}:${string}`;
export type ArrayOfIdentifiers = Identifier[];

export type PowerOptions = {
    name?: string;
    description?: string;
    hidden?: boolean;
}

export type MetaActionType = BaseMetaAction;
export type MetaConditionType = BaseMetaCondition;

export type EntityActionType = BaseEntityAction | MetaActionType;
export type EntityConditionType = BaseEntityCondition | MetaConditionType;
export type BlockConditionType = BaseBlockCondition | MetaConditionType;
export type BlockActionType = BaseBlockAction | MetaActionType;
export type BientityConditionType  = BaseBientityCondition | MetaConditionType;
export type BientityActionType = BaseBientityAction | MetaActionType;
export type ItemActionType = BaseItemAction | MetaActionType;
export type ItemConditionType = BaseItemCondition | MetaConditionType;
export type FluidConditionType = EmptyFluidCondition | MetaConditionType;
export type DamageConditionType = BaseDamageCondition | MetaConditionType;
export type BiomeConditionType = BaseBiomeCondition | MetaConditionType;
export type PowerType = BasePower;

export type ActionType = EntityActionType | BlockActionType | BientityActionType | ItemActionType
export type ConditionType = EntityConditionType | BlockConditionType | ItemConditionType | BientityConditionType | FluidConditionType | DamageConditionType | BiomeConditionType | MetaConditionType;

export type TextComponent = string | {text: string, color: string} | [string | object]
export type Vector = {x: number, y: number, z: number}

export interface Key {
    key: string;
    continuous?: boolean;
}

export type Hands = ["main_hand", "off_hand"] | ["main_hand"] | ["off_hand"] | [];

export interface ItemStack {
    item: Identifier;
    amount?: Number;
    tag?: string;
}

export type DamageSource = {
    name: string;
    bypasses_armor?: boolean;
    fire?: boolean;
    unblockable?: boolean;
    magic?: boolean;
    out_of_world?: boolean;
}

export type StatusEffectInstance = {
    effect: Identifier;
    duration?: number;
    amplifier?: number;
    is_ambient?: boolean;
    show_particles?: boolean;
    show_icon?: boolean;
}
export type ArrayOfStatusEffectInstances = StatusEffectInstance[];

export type ItemSlot = `armor.${"head" | "chest" | "legs" | "feet"}` | `container.${number}` | `hotbar.${number}` | `inventory.${number}` | `enderchest.${number}` | `horse.${number}` | `horse.armor` | `horse.saddle` | `villager.${number}` | `weapon.${"mainhand" | "offhand"}` | "weapon";
export type ArrayOfItemSlots = ItemSlot[];

export type DestructionType = "break" | "explode" | "none";

export type PlayerAbility = "minecraft:flying" | "minecraft:instabuild" | "minecraft:invulnerable" | "minecraft:maybuild" | "minecraft:mayfly"

export type ShapeType = "collider" | "outline" | "visual";
export type FluidHandling = "any" | "none" | "source_only";

export type InventoryType = "inventory" | Identifier;

export type ActionResult = "success" | "fail" | "pass" | "consume" | "consume_partial";

export type ContainerType = "chest" | "hopper" | "dropper" | "dispenser" | "double_chest";

type Ingredient = { item?: Identifier, tag?: Identifier };
export type IngredientType = Ingredient | Ingredient[];

export type ParticleEffect = Identifier | { type: Identifier, params: string };

export interface HudRender {
    should_render?: boolean;
    sprite_location?: Identifier;
    bar_index?: number;
    condition?: EntityConditionType;
    inverted?: boolean;
}

export type AttributeModifierOperation = "add_base_early" | "multiply_base_additive" | "multiply_base_multiplicative" | "add_base_late" | "min_base" | "max_base" | "set_base" | "multiply_total_additive" | "multiply_total_multiplicative" | "min_total" | "max_total" | "set_total";

export interface AttributeModifier {
    operation: AttributeModifierOperation;
    value: number;
    resource?: Identifier;
    name?: string;
    modifier?: AttributeModifier;
}

export type ArrayOfAttributeModifiers = AttributeModifier[];

export type AttributedAttributeModifierOperation = "addition" | "multiply_base" | "multiply_total";
export interface AttributedAttributeModifier {
    attribute: Identifier;
    operation: AttributedAttributeModifierOperation;
    value: number;
    name?: string;
}

export type BiomeCategory = "beach" | "desert" | "extreme_hills" | "forest" | "icy" | "jungle" | "mesa" | "mountain" | "mushroom" | "nether" | "ocean" | "plains" | "river" | "savanna" | "swamp" | "taiga" | "the_end" | "underground" | "none";

export type FeatureRenderer = "armor" | "cape" | "cat_collar" | "deadmau5" | "dolphin_held_item" | "drowned_overlay" | "elytra" | "enderman_block" | "energy_swirl_overlay" | "eyes" | "fox_held_item" | "head" | "held_item" | "horse_armor" | "horse_marking" | "iron_golem_crack" | "iron_golem_flower" | "llama_decor" | "mooshroom_mushroom" | "panda_held_item" | "saddle" | "sheep_wool" | "shoulder_parrot" | "shulker_head" | "slime_overlay" | "snowman_pumpkin" | "stray_overlay" | "stuck_objects" | "trident_riptide" | "tropical_fish_color" | "villager_clothing" | "villager_held_item" | "wolf_collar"

export interface PositionedItemStack extends ItemStack {
    slot?: number;
}

export interface CraftingRecipe {
    type: Identifier;
    id: Identifier;
    result: {
        item: Identifier;
        count: number;
    }
}

export type OriginIcon = Identifier | ItemStack;

export type Side = "client" | "server"

export interface ChoiceMetActionAction {
    element: ActionType;
    weight: number;
}

export interface IfElseListMetaActionAction { 
    condition: ConditionType;
    action: ActionType;
}

export enum MinecraftFunctionType {
    Normal,
    Load,
    Tick
}