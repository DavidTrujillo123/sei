<script>
    export let comboItems = [''];
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let option;
    $: dispatch('option', option);
</script>

<div class="combo-box">
    <select class="select" bind:value={option}>
        {#each comboItems as item (item)}
            <option value={item} >{item}</option>
        {/each}
    </select>
    <div class="arrow"></div>
</div>

<style>
    .combo-box {
        position: relative;
        display: inline-block;
    }

    .select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 200px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
    }

    .select:focus {
        outline: none;
        border-color: #4caf50;
    }

    .arrow {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        pointer-events: none;
    }

    .arrow::before {
        content: "\25BC"; /* Unicode character for down arrow */
        font-size: 20px;
        color: #333;
    }
</style>
