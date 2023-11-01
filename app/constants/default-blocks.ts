import { IfBlockType } from "@/app/types/block/if";
import { DrawBlockType } from "@/app/types/block/draw";
import { GameStartBlockType } from "../types/block/game/start";

export const DEFAULT_BLOCKS = [
  new IfBlockType(),
  new DrawBlockType(),
  new GameStartBlockType(),
];
