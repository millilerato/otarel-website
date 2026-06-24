import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Gravity({ items = [] }) {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;
    const Events = Matter.Events;

    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // Ground + walls (IMPORTANT for stacking)
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 50,
      window.innerWidth,
      100,
      { isStatic: true }
    );

    const leftWall = Bodies.rectangle(
      -50,
      window.innerHeight / 2,
      100,
      window.innerHeight,
      { isStatic: true }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth + 50,
      window.innerHeight / 2,
      100,
      window.innerHeight,
      { isStatic: true }
    );

    World.add(world, [ground, leftWall, rightWall]);

    // Create physics bodies for each card
    const bodies = items.map((item, i) => {
      const body = Bodies.rectangle(
        item.x,
        item.y,
        300,
        140,
        {
          restitution: 0.4,
          friction: 0.8,
          density: 0.002,
        }
      );

      body.label = item.id;
      return body;
    });

    World.add(world, bodies);

    // Mouse drag
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
      },
    });

    World.add(world, mouseConstraint);

    Engine.run(engine);
    Render.run(render);

    // Sync DOM with physics
    Events.on(engine, "afterUpdate", () => {
      items.forEach((item, i) => {
        const el = document.getElementById(item.id);
        const body = bodies[i];

        if (el && body) {
          el.style.transform = `translate(${body.position.x - 150}px, ${body.position.y - 70}px) rotate(${body.angle}rad)`;
        }
      });
    });

    return () => {
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [items]);

  return <div ref={sceneRef} className="absolute inset-0 z-0" />;
}